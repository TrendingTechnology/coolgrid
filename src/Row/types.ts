import { css } from '../types'

export interface Props {
  children?: any;
  tag?: any;
  size?: number | object;
  gap?: number;
  columns?: number;
  gutter?: number;
  padding?: number | object;
  extendCss?: css;
  extendColCss?: css;
}

export interface Context {
  breakpoints: object;
  breakpointKeys: string[];
  columns: number;
  extendRowCss?: css;
  extendColCss?: css;
}
