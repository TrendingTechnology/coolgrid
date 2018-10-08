export interface Props {
  children?: any;
  tag?: string;
  size?: any;
  gap?: any;
  padding?: any;
  xs?: number | object;
  sm?: number | object;
  md?: number | object;
  lg?: number | object;
  xl?: number | object;
}

export interface Context {
  breakpoints: object;
  breakpointKeys: string[];
  ctx?: object;
  columns: number;
}
