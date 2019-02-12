import React from 'react'
import styled from 'styled-components'
import { pick, omit } from 'lodash'
import RowCtx from './context'
import Styled from './styled'
import { calculateBreakpointOptions, extendCss } from '../utils'
import { Ctx as ContainerCtx } from '../Container'
import { Props, Context } from './types'

const RESERVED_WORDS: string[] = [
  'size',
  'gap',
  'gutter',
  'padding',
  'columns',
  'colCss',
]

const Element = ({ children, tag, css, ...props }: Props) => {
  return (
    <ContainerCtx.Consumer>
      {({ breakpoints, breakpointKeys, baseSize, rowCss, ...ctx }: Context) => {
        const breakpointOptions = calculateBreakpointOptions(
          breakpointKeys,
          breakpoints,
          Object.assign({}, ctx, props),
          ['gap', 'gutter']
        )

        const context: object = {
          ...pick(ctx, RESERVED_WORDS),
          ...pick(props, RESERVED_WORDS),
          baseSize,
        }

        const breakpointValues: object = {
          ...pick(ctx, breakpointKeys),
          ...pick(props, breakpointKeys),
        }

        const cssHelper = extendCss(css || rowCss)
        const Row = cssHelper
          ? styled(Styled)`
              ${cssHelper}
            `
          : Styled

        return (
          <Row
            as={tag}
            breakpoints={breakpointOptions}
            baseSize={baseSize}
            {...omit(props, RESERVED_WORDS)}
          >
            <RowCtx.Provider
              value={{
                breakpointKeys,
                breakpoints,
                ...breakpointValues,
                ...context,
              }}
            >
              {children}
            </RowCtx.Provider>
          </Row>
        )
      }}
    </ContainerCtx.Consumer>
  )
}

Element.displayName = 'mosquito-ui/grid/Row'

export default Element
