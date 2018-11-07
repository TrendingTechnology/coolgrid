import React, { Children } from 'react'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import compact from 'lodash/compact'
import Context from './context'
import Container from './styled'
import { Props } from './types'
import defaultProps from './defaultProps'

const RESERVED_WORDS = [
  'size',
  'gap',
  'padding',
  'columns',
  'extendColCss',
  'extendRowCss',
]

const Element = ({
  children,
  tag,
  extendCss,
  breakpoints,
  ...props
}: Props) => {
  const breakpointKeys = Object.keys(breakpoints)
  const breakpointsProps = pick(props, breakpointKeys)
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
