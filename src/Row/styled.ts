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

  ${({ gap, gutter }: { gap?: number; gutter?: number }) =>
    gap &&
    `
    margin: ${gutter === 0 ? (-1 * gap) / 2 : gap / 2}px -${gap / 2}px;
  `};

  ${({ extendCss }: { extendCss?: string }) => extendCss && extendCss};
`
