import React from 'react'
import RowCtx from '../Row/context'
import Col from './styled'
import { Props, Context } from './types'
import { getBreakpointOpts } from './utils'

const Element = ({ tag, children, size, gap, padding, ...props }: Props) => (
  <RowCtx.Consumer>
    {({ breakpoints, breakpointKeys, ...ctx }: Context) => {
      const breakpointOptions = getBreakpointOpts(
        breakpoints,
        {
          ...props,
          size,
          gap,
          padding,
        },
        ctx
      )

      return (
        <Col {...ctx} {...props} breakpoints={breakpointOptions}>
          {children}
        </Col>
      )
    }}
  </RowCtx.Consumer>
)

Element.displayName = 'mosquito-ui/grid/Col'

export default Element
