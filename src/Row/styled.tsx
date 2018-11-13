import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { generateMediaQueries } from '../utils'

const breakpointCss = ({ gap, gutter }: { gap?: number; gutter?: number }) => {
  let result = ''

  if (gap) {
    result += `
        margin: ${gutter === 0 ? (-1 * gap) / 2 : gap / 2}px -${gap / 2}px;
      `
  }

  return result
}

interface Props {
  breakpoints: object;
  gap?: number;
  gutter?: number;
}

const Styled = styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  ${({ breakpoints }: { breakpoints: object }) =>
    breakpoints && generateMediaQueries(breakpoints, breakpointCss)};
`

export default class extends PureComponent<Props> {
  public render() {
    return <Styled {...this.props} />
  }
}
