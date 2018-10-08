import React from 'react'
import ContainerCtx from './context'
import Container from './styled'
import { Props } from './types'
import defaultProps from './defaultProps'

const Element = ({ tag, children, extendCss, ...props }: Props) => {
  // const Component = tag ? Container.withComponent(tag) : Container

  const Component = Container

  return (
    <ContainerCtx.Provider
      value={{
        ...props,
        breakpointKeys: Object.keys(props.breakpoints),
      }}
    >
      <Component {...props} extendCss={extendCss}>
        {children}
      </Component>
    </ContainerCtx.Provider>
  )
}

Element.displayName = '@mosquito-ui/grid/Container'
Element.defaultProps = defaultProps

export default Element
