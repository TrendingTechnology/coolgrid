import { css, IBreakpoint, contextProperty } from '../types'

export interface Props extends IBreakpoint {
  children?: any
  tag?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  columns?: number
  css?: css
  colCss?: css
}

export interface Context {
  breakpoints: object
  breakpointKeys: string[]
  columns: number
  rowCss?: css
  colCss?: css
}

export interface StyledProps {
  breakpoints: object
  gap?: contextProperty
  gutter?: contextProperty
}
