import styled, { css } from 'styled-components'
import { generateMediaQueries } from '../utils'

const breakpointCss = ({ gap, gutter }) => {
  if (!gap) return ''

  let vertical = gap / 2
  const horizontal = -1 * vertical

  if (gutter === 0) vertical *= -1
  else if (Number.isFinite(gutter)) vertical = gutter

  return css`
    margin: ${vertical}px ${horizontal}px;
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
