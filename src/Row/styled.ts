import styled from 'styled-components'

interface Props {
  gap?: number;
  gutter?: number;
  extendCss?: string;
}

export default styled.div<Props>`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;

  ${({ gap, gutter }: { gap?: number; gutter?: number }) => {
    if (gap) {
      const marginVertical: number | undefined = gap / 2
      let marginTop: number = 0
      let marginBottom: number = gap

      if (gutter === 0) {
        marginTop = -1 * gap
        marginBottom = 0
      }

      if (gutter && (gutter > 0 || gutter < 0)) {
        marginTop = gutter
        marginBottom = gutter
      }

      return `
        margin-top: ${marginTop}px;
        margin-left: -${marginVertical}px;
        margin-right: -${marginVertical}px;
        margin-bottom: ${marginBottom}px
      `
    }
  }};

  ${({ extendCss }: { extendCss?: string }) => extendCss && extendCss};
`
