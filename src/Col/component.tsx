import React from 'react'
import styled from 'styled-components'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import RowCtx from '../Row/context'
import Styled from './styled'
import { Props, Context } from './types'
import { calculateBreakpointOptions } from '../utils'

const RESERVED_WORDS = ['size', 'gap', 'padding']

const Element = ({ tag, children, extendCss, ...props }: Props) => (
  <RowCtx.Consumer>
    {({
      breakpoints,
      breakpointKeys,
      columns,
      extendColCss,
      ...ctx
    }: Context) => {
      const context = {
        ...pick(ctx, RESERVED_WORDS),
        ...pick(props, RESERVED_WORDS),
      }

      const breakpointKeyProps = {
        ...pick(ctx, breakpointKeys),
        ...pick(props, breakpointKeys),
      }

      const breakpointOptions = calculateBreakpointOptions(
        breakpointKeys,
        breakpoints,
        { ...context, ...breakpointKeyProps },
        ['size', 'padding', 'gap']
      )

      const css = extendCss || extendColCss
      const Column = css
        ? styled(Styled)`
            ${css}
          `
        : Styled

      return (
        <Column
          // extendCss={extendCss || extendColCss}
          breakpoints={breakpointOptions}
          columns={columns}
          {...omit(props, RESERVED_WORDS)}
        >
          {children}
        </Column>
      )
    }}
  </RowCtx.Consumer>
)

Element.displayName = 'mosquito-ui/grid/Col'

export default Element
