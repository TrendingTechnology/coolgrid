export interface Breakpoints {
  xs: {
    viewport: number;
    container: number;
  };
  sm: {
    viewport: number;
    container: number;
  };
  md: {
    viewport: number;
    container: number;
  };
  lg: {
    viewport: number;
    container: number;
  };
  xl: {
    viewport: number;
    container: number;
  };
}

export interface Props {
  children: any;
  tag?: string;
  extendCss?: string;
  breakpoints: object;
  columns: number;
}
