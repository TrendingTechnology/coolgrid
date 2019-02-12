import { css, IBreakpoint } from '../types'

export interface Props extends IBreakpoint {
  children?: any
  tag?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  breakpoints?: object
  columns?: number
  css?: css
  rowCss?: css
  colCss?: css
  [propName: string]: any
}
