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
}

export interface Context {
  breakpoints: object;
  breakpointKeys: string[];
  columns: number;
  extendRowCss?: string;
  extendColCss?: string;
}
