import styled, { css } from 'styled-components'
import { generateMediaQueries } from '../utils'

const breakpointCss = ({ gap, gutter }) => {
  if (!gap) return ''
  const vertical = gutter === 0 ? (-1 * gap) / 2 : gap / 2
  const horizontal = gap / 2

  return css`
    margin: ${vertical}px -${horizontal}px;
  `
}

export default styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;

  ${({ theme: t }) => t.breakpoints && generateMediaQueries(t, breakpointCss)};

  ${({ extendCss }) => extendCss};
`
