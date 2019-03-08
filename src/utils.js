import { css } from 'styled-components'
import { get, pick, omit } from 'lodash'
import { BASE_RESERVED_KEYS } from './constants'

// ------------------------------------------
// create grid settings
// ------------------------------------------
export const createGridSettings = (props = {}, ctx = {}, theme = {}) => {
  const gridTheme = get(theme, 'grid', {})
  const config = {
    ...pick(gridTheme, BASE_RESERVED_KEYS),
    ...pick(ctx, BASE_RESERVED_KEYS),
    ...pick(props, BASE_RESERVED_KEYS)
  }

  return {
    ...config,
    breakpointKeys: Object.keys(config.breakpoints)
  }
}

// ------------------------------------------
// merging utility
// ------------------------------------------
export const mergeObjects = (props = {}, ctx = {}, reservedKeys) => {
  if (!reservedKeys) return Object.assign({}, ctx, props)

  return {
    ...pick(ctx, reservedKeys),
    ...pick(props, reservedKeys)
  }
}

// ------------------------------------------
// omitting keys utility
// ------------------------------------------
export const omittedProps = (props = {}, reservedKeys) => {
  return omit(props, reservedKeys)
}

// ------------------------------------------
// extendCss utility
// ------------------------------------------
export const extendCss = value => {
  if (!value) return undefined
  if (typeof value === 'function') return value(css)

  return css`
    ${value}
  `
}

// ------------------------------------------
// media query css generator
// ------------------------------------------
const mediaQuery = (viewport, baseSize, data) => {
  if (!data) return ''

  if (viewport > 0) {
    const edgeValue = baseSize ? `${viewport / baseSize}em` : `${viewport}px`

    return `
      @media only screen and (min-width: ${edgeValue}) {
        ${data}
      }
    `
  }

  return data
}

export const generateMediaQueries = ({ breakpoints, baseSize }, css) => {
  if (!breakpoints) throw Error('Breakpoints are missing!')

  let result = ''
  const entries = Object.entries(breakpoints)

  for (const [, dimensions] of entries) {
    const { viewport } = dimensions
    if (dimensions.viewport >= 0) {
      result += mediaQuery(viewport, baseSize, css(dimensions))
    }
  }

  return result
}

// ------------------------------------------
// ROW and COL media query params calculation
// ------------------------------------------
const calc = (attr, key, props) => {
  const param = props[attr]

  // param can be even zero, eg. gutter
  if (!param && param !== 0) return null

  if (param && typeof param === 'object') {
    if (Object.keys(param).includes(key)) {
      return param[key]
    } else {
      return null
    }
  }

  return param
}

export const calculateBreakpointOptions = (keys, breakpoints, props, attrs) => {
  const result = Object.assign({}, breakpoints)

  // iterates over breakpoint keys like sm, md, lg, xl, xxl or mobile, desktop, etc.
  // each breakpoint key should already contain viewport and container values,
  // so we extend this for additional values like gap, padding or size
  for (const key of keys) {
    let additionalProps = {}

    // TODO: refactor later
    attrs.forEach(element => {
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
