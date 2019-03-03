import React from 'react'
import RowCtx from '../Row/context'
import Styled from './styled'
import {
  createGridSettings,
  mergePropsWithContext,
  restProps,
  calculateBreakpointOptions,
  extendCss
} from '../utils'
import { COLUMN_RESERVED_KEYS as RESERVED_KEYS } from '../constants'

const Element = ({ children, tag, css, ...props }) => (
  <RowCtx.Consumer>
    {({ colCss, colTag, ...ctx }) => {
      const gridConfiguration = createGridSettings({}, ctx, {})

      const breakpointOptions = calculateBreakpointOptions(
        gridConfiguration.breakpointKeys,
        gridConfiguration.breakpoints,
        {
          ...mergePropsWithContext(props, ctx, RESERVED_KEYS),
          ...mergePropsWithContext(props, ctx, gridConfiguration.breakpointKeys)
        },
        RESERVED_KEYS
      )

      return (
        <Styled
          as={tag || colTag}
          extendCss={extendCss(css || colCss)}
          theme={{
            ...gridConfiguration,
            breakpoints: breakpointOptions
          }}
          {...restProps(props, RESERVED_KEYS)}
        >
          {children}
        </Styled>
      )
    }}
  </RowCtx.Consumer>
)

Element.displayName = 'mosquito-ui/grid/Col'

export default Element
