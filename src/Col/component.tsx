import React from 'react'
import styled from 'styled-components'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import RowCtx from '../Row/context'
import Styled from './styled'
import { Props, Context } from './types'
import { calculateBreakpointOptions, extendCss } from '../utils'

const RESERVED_WORDS: string[] = ['size', 'gap', 'padding']

const Element = ({ children, tag, css, ...props }: Props) => (
  <RowCtx.Consumer>
    {({
      breakpoints,
      breakpointKeys,
      columns,
      colCss,
      baseSize,
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
        RESERVED_WORDS
      )

      const cssHelper = extendCss(css || colCss)
      const Column = cssHelper
        ? styled(Styled)`
            ${cssHelper}
          `
        : Styled

      return (
        <Column
          as={tag}
          breakpoints={breakpointOptions}
          columns={columns}
          baseSize={baseSize}
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
