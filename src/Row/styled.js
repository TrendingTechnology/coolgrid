import styled, { css } from 'styled-components'
import { get } from 'lodash'
import { generateMediaQueries } from '../utils'

const breakpointCss = ({ gap, gutter }) => {
  let result = ''

  if (gap) {
    result += `
        margin: ${gutter === 0 ? (-1 * gap) / 2 : gap / 2}px -${gap / 2}px;
      `
  }

  return result
}

export default styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;

  ${({ theme: t }) => t.breakpoints && generateMediaQueries(t, breakpointCss)}};

  ${({ extendCss }) =>
    css`
      ${extendCss}
    `}
`
