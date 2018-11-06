import React from 'react'
import ContainerCtx from './context'
import Container from './styled'
import { Props } from './types'
import defaultProps from './defaultProps'

const Element = ({
  tag,
  columns,
  breakpoints,
  extendCss,
  extendColCss,
  extendRowCss,
  extendColProps,
  extendRowProps,
  ...props
}: Props) => {
  return (
    <ContainerCtx.Provider
      value={{
        columns,
        breakpoints,
        breakpointKeys: Object.keys(breakpoints || {}),
        extendColCss,
        extendRowCss,
        extendColProps,
        extendRowProps,
      }}
    >
      <Container
        as={tag}
        breakpoints={breakpoints || {}}
        extendCss={extendCss}
        {...props}
      />
    </ContainerCtx.Provider>
  )
}

Element.displayName = 'mosquito-ui/grid/Container'
Element.defaultProps = defaultProps

export default Element
