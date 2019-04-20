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
export const omittedProps = (props = {}, reservedKeys) => omit(props, reservedKeys)

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

export const stripUnit = (value, unitReturn) => {
  const cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/
  if (typeof value !== 'string') return unitReturn ? [value, undefined] : value
  const matchedValue = value.match(cssRegex)

  if (unitReturn) {
    if (matchedValue) return [parseFloat(value), matchedValue[2]]
    return [value, undefined]
  }

  if (matchedValue) return parseFloat(value)
  return value
}

// ------------------------------------------
// media query css generator
// ------------------------------------------
const mediaQuery = (viewport, baseSize, data) => {
  if (!data) return ''
  const [value, unit] = stripUnit(viewport, true)

  if (value > 0) {
    let edgeValue = viewport

    if (!unit || unit === 'px') {
      if (baseSize) edgeValue = `${value / baseSize}em`
      else edgeValue = `${value}px`
    }

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
    if (stripUnit(dimensions.viewport) >= 0) {
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
    }
    return null
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
