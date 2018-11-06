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

export const getBreakpointOpts = (breakpoints = {}, attrs, ctx) => {
  const { gap, size, padding, ...props } = attrs
  const result = Object.assign({}, breakpoints)

  // iterates over breakpoint keys like sm, md, lg, xl, xxl or mobile, desktop, etc.
  // each breakpoint key should already contain viewport and container values,
  // so we extend this for additional values like gap, padding or size
  for (const [key] of Object.entries(breakpoints)) {
    result[key] = Object.assign(
      {},
      breakpoints[key],

      typeof props[key] === 'object' ? props[key] : {},

      // add size opts to each breakpoint
      calculate(
        'size',
        key,
        Number.isInteger(props[key]) ? props[key] : size,
        ctx
      ),

      // add padding opts to each breakpoint
      calculate('padding', key, padding, ctx),

      // add gap (space between columns) opts to each breakpoint
      calculate('gap', key, undefined, ctx)
    )
  }

  return result
}
