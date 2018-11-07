import React from 'react'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import RowCtx from './context'
import Row from './styled'
import { Ctx as ContainerCtx } from '../Container'
import { Props, Context } from './types'
import { calculateBreakpointOptions } from '../utils'

const RESERVED_WORDS: string[] = [
  'size',
  'gap',
  'gutter',
  'padding',
  'columns',
  'extendColCss',
]

const Element = ({ children, tag, extendCss, ...props }: Props) => {
  return (
    <ContainerCtx.Consumer>
      {({ breakpoints, breakpointKeys, extendRowCss, ...ctx }: Context) => {
        const breakpointOptions = calculateBreakpointOptions(
          breakpointKeys,
          breakpoints,
          Object.assign({}, ctx, props),
          ['gap', 'gutter']
        )

        const context: object = {
          ...pick(ctx, RESERVED_WORDS),
          ...pick(props, RESERVED_WORDS),
        }

        const breakpointValues: object = {
          ...pick(ctx, breakpointKeys),
          ...pick(props, breakpointKeys),
        }

        return (
          <Row
            as={tag}
            breakpoints={breakpointOptions}
            extendCss={extendCss || extendRowCss}
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
