import styled from 'styled-components'
import { generateMediaQueries } from '../utils'

interface CssParams {
  size: number
  gap?: number
  padding?: number
}

const cssCreator = (columns: number) => ({ size, gap, padding }: CssParams) => {
  let result = ''
  const width: number = (size / columns) * 100

  if (width) {
    result += `
  max-width: ${gap ? `calc(${width}% - ${gap}px)` : `${width}%`};
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: ${gap ? `calc(${width}% - ${gap}px)` : `${width}%`};
`
  }

  if (padding || padding === 0) {
    result += `padding: ${padding}px;`
  }
  if (gap || gap === 0) {
    result += `margin-left: ${gap / 2}px; margin-right: ${gap /
      2}px; margin-top: ${gap}px;`
  }

  return result
}

interface Props {
  breakpoints: object
  columns: number
  baseSize: number
}

export default styled.div<Props>`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 1px;
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;

  ${({
    breakpoints,
    columns,
    baseSize,
  }: {
    breakpoints: object
    columns: number
    baseSize: number
  }) => generateMediaQueries(breakpoints, baseSize, cssCreator(columns))};
`
