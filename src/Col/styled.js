import styled, { css } from 'styled-components'
import { get } from 'lodash'
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
    result += `margin-left: ${gap / 2}px; margin-right: ${gap /
      2}px; margin-top: ${gap}px;`
  }

  return result
}

export default styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 1px;
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;

  ${({ extendCss }) =>
    css`
      ${extendCss}
    `}

  ${({ theme: t, breakpoints, columns, baseSize }) => {
    const _breakpoints = breakpoints || get(t, 'grid.breakpoints', {})
    const _baseSize = baseSize || get(t, 'grid.baseSize')
    const _columns = columns || get(t, 'grid.columns')

    return generateMediaQueries(_breakpoints, _baseSize, cssCreator(_columns))
  }};
`
