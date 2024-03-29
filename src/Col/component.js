import React from 'react'
import {
  createGridSettings,
  mergeObjects,
  omittedProps,
  calculateBreakpointOptions,
  extendCss
} from '../utils'
import { COLUMN_RESERVED_KEYS as RESERVED_KEYS } from '../constants'
import RowContext from '../Row/context'
import Styled from './styled'

const Element = ({
  children, tag, css, ...rest
}) => (
  <RowContext.Consumer>
    {({ colCss, colTag, ...ctx }) => {
      const gridConfiguration = createGridSettings({}, ctx, {})

      // delete gap, it can be passed only via context from Container or Row
      const props = omittedProps(rest, 'gap')

      const breakpointOptions = calculateBreakpointOptions(
        gridConfiguration.breakpointKeys,
        gridConfiguration.breakpoints,
        {
          ...mergeObjects(props, ctx, RESERVED_KEYS),
          ...mergeObjects(props, ctx, gridConfiguration.breakpointKeys)
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
  </RowContext.Consumer>
)

Element.displayName = 'vitus-labs/coolgrid/Col'

export default Element
