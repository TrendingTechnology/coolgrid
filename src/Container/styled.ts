import styled from 'styled-components'
import generateMediaQueries from '../utils'

const css = ({ container }: { container?: number }) =>
  container &&
  `
    max-width: ${container}px;
  `

export default styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ breakpoints }: { breakpoints?: object }) =>
    breakpoints && generateMediaQueries(breakpoints, css)};
  ${({ extendCss }: { extendCss?: string }) => extendCss && extendCss}};
`
