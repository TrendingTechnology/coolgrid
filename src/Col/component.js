import React from 'react'
import RowCtx from '../Row/context'
import Styled from './styled'
import {
  createGridSettings,
  mergePropsWithContext,
  omittedProps,
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
          ...mergePropsWithContext(
            omittedProps(props, ['gap']),
            ctx,
            RESERVED_KEYS
          ),
          ...mergePropsWithContext(
            omittedProps(props, ['gap']),
            ctx,
            gridConfiguration.breakpointKeys
          )
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
          {...omittedProps(props, RESERVED_KEYS)}
        >
          {children}
        </Styled>
      )
    }}
  </RowCtx.Consumer>
)

Element.displayName = 'mosquito-ui/grid/Col'

export default Element
