import * as React from 'react'
import { Ctx as RowCtx } from '../Row'
import Col from './styled'
import { Props, Context } from './types'

const calculate = (
  attr: string,
  key: string,
  params?: number,
  ctx?: number
): object => {
  const result = {}

  if (params && Number.isInteger(params)) {
    result[attr] = params
  } else if (
    params &&
    typeof params === 'object' &&
    Object.keys(params).includes(key)
  ) {
    result[attr] = params[key]
  } else if (ctx && Number.isInteger(ctx[attr])) {
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
    {({ breakpoints, breakpointKeys, ...ctx }: IContext) => {
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
            calculate('gap', key, null, ctx)
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
