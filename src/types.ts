import { FlattenSimpleInterpolation } from 'styled-components'

export type css = FlattenSimpleInterpolation | Function
export type contextProperty = number | object

export interface IBreakpoint {
  gap?: contextProperty
  gutter?: contextProperty
  padding?: contextProperty
  size?: contextProperty
}
