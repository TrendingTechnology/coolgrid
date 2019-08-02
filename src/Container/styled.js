import styled, { css } from 'styled-components'
import { generateMediaQueries, stripUnit } from '../utils'

const breakpointCss = ({ container }) => {
  if (!container) return ''
  const [value, unit] = stripUnit(container, true)
  const maxWidth = !unit ? `${value}px` : `${value}${unit}`

  return css`
    max-width: ${maxWidth};
  `
}

export default styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ theme: t }) => t.breakpoints && generateMediaQueries(t, breakpointCss)};

  ${({ extendCss }) => extendCss};
`
