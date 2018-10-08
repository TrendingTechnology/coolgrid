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

export default generateMediaQueries
