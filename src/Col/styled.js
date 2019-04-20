import styled, { css } from 'styled-components'
import { generateMediaQueries } from '../utils'

const cssCreator = columns => ({ size, gap, padding }) => {
  let result = ''
  const width = (size / columns) * 100

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
    result += `
      margin-left: ${gap / 2}px;
      margin-right: ${gap / 2}px;
      margin-top: ${gap}px;
    `
  }

  return result
}

export default styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;

  ${({ theme: t }) => t.breakpoints && generateMediaQueries(t, cssCreator(t.columns))};

  ${({ extendCss }) => css`
    ${extendCss}
  `};
`
