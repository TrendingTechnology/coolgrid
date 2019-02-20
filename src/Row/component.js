import React from 'react'
import { pick, omit } from 'lodash'
import RowCtx from './context'
import Styled from './styled'
import { calculateBreakpointOptions, extendCss } from '../utils'
import { Ctx as ContainerCtx } from '../Container'

const RESERVED_WORDS = ['size', 'gap', 'gutter', 'padding', 'columns', 'colCss']

const Element = ({ children, tag, css, ...props }) => {
  return (
    <ContainerCtx.Consumer>
      {({ breakpoints, breakpointKeys, baseSize, rowCss, ...ctx }) => {
        const breakpointOptions = calculateBreakpointOptions(
          breakpointKeys,
          breakpoints,
          Object.assign({}, ctx, props),
          ['gap', 'gutter']
        )

        const context = {
          ...pick(ctx, RESERVED_WORDS),
          ...pick(props, RESERVED_WORDS),
          baseSize
        }

        const breakpointValues = {
          ...pick(ctx, breakpointKeys),
          ...pick(props, breakpointKeys)
        }

        return (
          <Styled
            as={tag}
            breakpoints={breakpointOptions}
            baseSize={baseSize}
            extendCss={extendCss(css || rowCss)}
            {...omit(props, RESERVED_WORDS)}
          >
            <RowCtx.Provider
              value={{
                breakpointKeys,
                breakpoints,
                ...breakpointValues,
                ...context
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
