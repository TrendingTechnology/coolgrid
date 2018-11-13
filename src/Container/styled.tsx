import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { generateMediaQueries } from '../utils'

const breakpointCss = ({ container }: { container: number }) => {
  let result = ''
  if (container) {
    result += `
        max-width: ${container}px;
      `
  }

  return result
}

interface Props {
  breakpoints: object;
}

const Styled = styled.div<Props>`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ breakpoints }: { breakpoints: object }) =>
    generateMediaQueries(breakpoints, breakpointCss)};
`

export default class extends PureComponent<Props> {
  public render() {
    return <Styled {...this.props} />
  }
}
