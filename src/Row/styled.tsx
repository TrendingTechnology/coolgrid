import styled from 'styled-components'
import { generateMediaQueries } from '../utils'
import { StyledProps } from './types'

const breakpointCss = ({ gap, gutter }: { gap?: number; gutter?: number }) => {
  let result = ''

  if (gap) {
    result += `
        margin: ${gutter === 0 ? (-1 * gap) / 2 : gap / 2}px -${gap / 2}px;
      `
  }

  return result
}

export default styled.div<StyledProps>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;

  ${({ breakpoints, baseSize }: { breakpoints: object; baseSize: number }) =>
    breakpoints && generateMediaQueries(breakpoints, baseSize, breakpointCss)};
`
