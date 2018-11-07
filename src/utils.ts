// ------------------------------------------
// media query css generator
// ------------------------------------------
const mediaQuery = (viewport: number, data?: string): string => {
  if (!data) {
    return ''
  }

  if (viewport > 0) {
    return `
    @media only screen and (min-width: ${viewport}px) {
      ${data}
    }
  `
  }

  return data
}

const generateMediaQueries = (
  breakpoints: object,
  css: (css: object) => string
): string => {
  let result = ''
  const entries = Object.entries(breakpoints)

  for (const [, dimensions] of entries) {
    const { viewport } = dimensions
    if (dimensions.viewport >= 0) {
      result += mediaQuery(viewport, css(dimensions))
    }
  }

  return result
}

// ------------------------------------------
// ROW and COL media query params calculation
// ------------------------------------------
const calc = (attr: string, key: string, props: number | object): any => {
  const param: object | number | string = props[attr]

  // param can be even zero, eg. gutter
  if (!param && param !== 0) {
    return null
  }

  if (param && typeof param === 'object' && Object.keys(param).includes(key)) {
    return param[key]
  }

  return param
}

const calculateBreakpointOptions = (
  keys: object,
  breakpoints: object,
  props: object,
  attrs: string[]
) => {
  const result: object = Object.assign({}, breakpoints)

  // iterates over breakpoint keys like sm, md, lg, xl, xxl or mobile, desktop, etc.
  // each breakpoint key should already contain viewport and container values,
  // so we extend this for additional values like gap, padding or size
  // @ts-ignore
  for (const key of keys) {
    let additionalProps = {}

    // TODO: refactor later
    attrs.forEach((element: string) => {
      const value = calc(element, key, props)
      // zero quick fix
      if (value || value === 0) {
        additionalProps[element] = value
      }
    })

    const helper = props[key]

    if (helper) {
      if (typeof helper === 'object') {
        const tpm = Object.assign({}, additionalProps)
        additionalProps = { ...helper, ...tpm }
      }

      if (Number.isFinite(helper) || typeof helper === 'string') {
        additionalProps.size = helper
      }
    }

    result[key] = Object.assign(
      {},
      breakpoints[key], // default object
      additionalProps
    )
  }

  return result
}

export { generateMediaQueries, calculateBreakpointOptions }
