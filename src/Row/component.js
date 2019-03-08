import React from 'react'
import { get, pick } from 'lodash'
import RowCtx from './context'
import Styled from './styled'
import {
  createGridSettings,
  mergePropsWithContext,
  omittedProps,
  calculateBreakpointOptions,
  extendCss
} from '../utils'
import { Ctx as ContainerCtx } from '../Container'
import {
  ROW_RESERVED_KEYS as RESERVED_KEYS,
  BASE_RESERVED_KEYS
} from '../constants'

const Element = ({ theme, children, tag, css, ...props }) => {
  return (
    <ContainerCtx.Consumer>
      {({ rowCss, rowTag, ...ctx }) => {
        // output { breakpoints, baseSize, columns, breakpointKeys }
        const gridConfiguration = createGridSettings(
          props,
          ctx,
          get(theme, 'grid', {})
        )

        const enhancedBreakpoints = calculateBreakpointOptions(
          gridConfiguration.breakpointKeys,
          gridConfiguration.breakpoints,
          mergePropsWithContext(props, ctx),
          ['gap', 'gutter']
        )

        return (
          <Styled
            as={tag || rowTag}
            extendCss={extendCss(css || rowCss)}
            theme={{
              ...gridConfiguration,
              breakpoints: enhancedBreakpoints
            }}
            {...omittedProps(props, RESERVED_KEYS)}
          >
            <RowCtx.Provider
              value={{
                ...gridConfiguration,
                ...mergePropsWithContext(
                  props,
                  ctx,
                  gridConfiguration.breakpointKeys
                ),
                ...mergePropsWithContext(props, ctx, RESERVED_KEYS)
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

Element.displayName = 'mosquito-ui/grid/Row'

export default Element
