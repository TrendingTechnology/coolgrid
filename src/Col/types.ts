import { css, IBreakpoint } from '../types'

export interface Props extends IBreakpoint {
  children?: any
  tag?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  css?: css
  [propName: string]: any
}

export interface Context {
  breakpoints: object
  breakpointKeys: string[]
  columns: number
  colCss?: css
  baseSize: number
  [propName: string]: any
}
