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
  extendCss?: string;
}

export default styled.div<Props>`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ breakpoints }: { breakpoints: object }) =>
    breakpoints && generateMediaQueries(breakpoints, breakpointCss)};
  ${({ extendCss }: { extendCss?: string }) => extendCss && extendCss};
`
