import React from 'react'
import {
  createGridSettings,
  mergeObjects,
  omittedProps,
  calculateBreakpointOptions,
  extendCss
} from '../utils'
import {
  ROW_RESERVED_KEYS as RESERVED_KEYS,
  BASE_RESERVED_KEYS
} from '../constants'
import { Ctx as ContainerCtx } from '../Container'
import RowCtx from './context'
import Styled from './styled'

const Element = ({ theme, children, tag, css, ...props }) => {
  return (
    <ContainerCtx.Consumer>
      {({ rowCss, rowTag, ...ctx }) => {
        // output { breakpoints, baseSize, columns, breakpointKeys }
        const gridSettings = createGridSettings(props, ctx, theme)

        const breakpointOptions = calculateBreakpointOptions(
          gridSettings.breakpointKeys,
          gridSettings.breakpoints,
          mergeObjects(props, ctx),
          ['gap', 'gutter']
        )

        return (
          <Styled
            as={tag || rowTag}
            extendCss={extendCss(css || rowCss)}
            theme={{
              ...gridSettings,
              breakpoints: breakpointOptions
            }}
            {...omittedProps(props, RESERVED_KEYS)}
          >
            <RowCtx.Provider
              value={{
                ...gridSettings,
                ...mergeObjects(props, ctx, gridSettings.breakpointKeys),
                ...mergeObjects(props, ctx, RESERVED_KEYS)
              }}
            >
              {children}
            </RowCtx.Provider>
          </Styled>
        )
      }}
    </ContainerCtx.Consumer>
  )
}

Element.displayName = 'vitus-labs/coolgrid/Row'

export default Element
