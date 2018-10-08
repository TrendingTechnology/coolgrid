import React from 'react'
import RowCtx from '../Row/context'
import Col from './styled'
import { Props, Context } from './types'

const calculate = (
  attr: string,
  key: string,
  params?: number | object,
  ctx?: number | object
): object => {
  const result = {}

  if (
    params &&
    typeof params === 'object' &&
    Object.keys(params).includes(key)
  ) {
    result[attr] = params[key]
  } else if (params) {
    result[attr] = params
  } else if (ctx && Number.isFinite(ctx[attr])) {
    result[attr] = ctx[attr]
  } else if (
    ctx &&
    typeof ctx[attr] === 'object' &&
    Object.keys(ctx[attr]).includes(key)
  ) {
    result[attr] = ctx[attr][key]
  }

  return result
}

const Element = ({ tag, children, size, gap, padding, ...props }: Props) => (
  <RowCtx.Consumer>
    {({ breakpoints, breakpointKeys, ...ctx }: Context) => {
      const bpProps = Object.assign({}, breakpoints)
      const getPropKeys = () => {
        const breakpointsHelper = Object.entries(breakpoints)

        for (const [key] of breakpointsHelper) {
          bpProps[key] = Object.assign(
            {},
            breakpoints[key],
            typeof props[key] === 'object' ? props[key] : {},
            calculate(
              'size',
              key,

              Number.isInteger(props[key]) ? props[key] : size,
              ctx
            ),
            calculate('padding', key, padding, ctx),
            calculate('gap', key, undefined, ctx)
          )
        }
      }

      getPropKeys()

      return (
        <Col {...props} {...ctx} breakpoints={bpProps}>
          {children}
        </Col>
      )
    }}
  </RowCtx.Consumer>
)

Element.displayName = '@mosquito-ui/grid/Col'

export default Element
