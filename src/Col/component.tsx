import React from 'react'
import RowCtx from '../Row/context'
import Col from './styled'
import { Props, Context } from './types'
import { calculateBreakpointOptions } from '../utils'

const Element = ({ tag, children, ...props }: Props) => (
  <RowCtx.Consumer>
    {({ breakpoints, breakpointKeys, extendCss, ...ctx }: Context) => {
      const breakpointOptions = calculateBreakpointOptions(
        breakpointKeys,
        breakpoints,
        Object.assign({}, ctx, props),
        ['size', 'padding', 'gap']
      )

      return (
        <Col
          {...ctx}
          {...props}
          extendCss={extendCss}
          breakpoints={breakpointOptions}
        >
          {children}
        </Col>
      )
    }}
  </RowCtx.Consumer>
)

Element.displayName = 'mosquito-ui/grid/Col'

export default Element
