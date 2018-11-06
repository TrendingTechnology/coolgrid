export interface Props {
  children?: any;
  tag?: string;
  size?: any;
  gap?: any;
  padding?: any;
  extendCss?: string;
  // hack for stories at this moment, should be deleted
  xs?: number | object;
  sm?: number | object;
  md?: number | object;
  lg?: number | object;
  xl?: number | object;
}

export interface Context {
  breakpoints: object;
  breakpointKeys: string[];
  columns: number;
  extendCss?: string;
  ctx?: object;
}
