import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { generateMediaQueries } from '../utils'

interface CssParams {
  size: number;
  gap?: number;
  padding?: number;
}

const css = (columns: number) => ({ size, gap, padding }: CssParams) => {
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

  if (padding) {
    result += `padding: ${padding}px;`
  }
  if (gap) {
    result += `margin-left: ${gap / 2}px; margin-right: ${gap /
      2}px; margin-top: ${gap}px;`
  }

  return result
}

interface Props {
  breakpoints: object;
  columns: number;
}

const Styled = styled.div<Props>`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  min-height: 1px;
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;

  ${({ breakpoints, columns }: { breakpoints: object; columns: number }) =>
    generateMediaQueries(breakpoints, css(columns))};
`

export default class extends PureComponent<Props> {
  public render() {
    return <Styled {...this.props} />
  }
}
