export interface Props {
  children?: any;
  tag?: string;
  size?: number | object;
  gap?: number | object;
  columns?: number;
  gutter?: number | object;
  padding?: number | object;
  extendCss?: string;
  extendColCss?: string;
}

export interface Context {
  extendRowCss?: string;
  extendColCss?: string;
  breakpoints: object;
}
