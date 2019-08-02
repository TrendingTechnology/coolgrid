import styled, { css } from 'styled-components'
import { generateMediaQueries } from '../utils'

const cssCreator = columns => ({ size, gap, padding }) => {
  const t = {}
  const width = (size / columns) * 100

  t.display = size === 0 ? 'none' : 'block'

  if (width) {
    t.flex = 0
    t.width = gap ? `calc(${width}% - ${gap}px)` : `${width}%`
  }

  if (Number.isFinite(padding)) {
    t.padding = padding
  }
  if (Number.isFinite(gap)) {
    t.gap = gap / 2
  }

  return css`
    display: ${t.display};
    max-width: ${t.width};
    flex-grow: ${t.flex};
    flex-shrink: ${t.flex};
    flex-basis: ${t.width};
    margin: ${t.gap}px;
    padding: ${t.padding}px;
  `
}

export default styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;

  ${({ theme: t }) => t.breakpoints && generateMediaQueries(t, cssCreator(t.columns))};

  ${({ extendCss }) => extendCss};
`
