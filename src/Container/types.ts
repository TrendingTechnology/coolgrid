import { css } from '../types'

export interface Props {
  children?: any;
  tag?: string;
  breakpoints?: object;
  columns?: number;
  extendCss?: css;
  extendRowCss?: css;
  extendColCss?: css;
  gap?: number;
  padding?: number;
  size?: number;
  gutter?: number;
}
