export interface Props {
  children?: any;
  tag?: any;
  size?: number | object;
  gap?: number;
  columns?: number;
  gutter?: number;
  padding?: number | object;
  extendCss?: string;
  extendColCss?: string;
  extendColProps?: object;
}

export interface Context {
  breakpoints: object;
  breakpointKeys: object;
  columns: number;
  extendRowCss?: string;
  extendColCss?: string;
  extendColProps?: object;
  extendRowProps?: object;
}
