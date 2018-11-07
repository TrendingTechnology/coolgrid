import React from 'react'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import Context from './context'
import Container from './styled'
import { Props } from './types'
import defaultProps from './defaultProps'

const RESERVED_WORDS: string[] = [
  'size',
  'gap',
  'padding',
  'gutter',
  'columns',
  'extendColCss',
  'extendRowCss',
]

const Element = ({
  children,
  tag,
  extendCss,
  breakpoints = {},
  ...props
}: Props) => {
  const breakpointKeys: string[] = Object.keys(breakpoints)
  const breakpointsProps: object = pick(props, breakpointKeys)
  const context = pick(props, RESERVED_WORDS)

  return (
    <Container
      as={tag}
      breakpoints={breakpoints}
      extendCss={extendCss}
      {...omit(props, RESERVED_WORDS)}
    >
      <Context.Provider
        value={{
          breakpointKeys,
          breakpoints,
          ...breakpointsProps,
          ...context,
        }}
      >
        {children}
      </Context.Provider>
    </Container>
  )
}

Element.displayName = 'mosquito-ui/grid/Container'
Element.defaultProps = defaultProps

export default Element
