import styled, { css } from 'styled-components'
import { generateMediaQueries } from '../utils'

const breakpointCss = ({ container }) => {
  let result = ''
  if (container) {
    result += `
        max-width: ${container}px;
      `
  }

  return result
}

export default styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ extendCss }) =>
    css`
      ${extendCss}
    `}

  ${({ breakpoints, baseSize }) =>
    generateMediaQueries(breakpoints, baseSize, breakpointCss)};
`
