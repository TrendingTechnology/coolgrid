import styled, { css } from 'styled-components'
import { generateMediaQueries, stripUnit } from '../utils'

const breakpointCss = ({ container }) => {
  const [value, unit] = stripUnit(container, true)

  let maxWidth = container
  if (!unit) maxWidth = `${value}px`

  if (!container) return ''
  return `max-width: ${maxWidth};`
}

export default styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ theme: t }) => t.breakpoints && generateMediaQueries(t, breakpointCss)};

  ${({ extendCss }) =>
    css`
      ${extendCss}
    `}
`
