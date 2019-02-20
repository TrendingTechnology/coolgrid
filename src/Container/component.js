import React from 'react'
import styled from 'styled-components'
import { pick, omit } from 'lodash'
import Context from './context'
import Styled from './styled'
import defaultProps from './defaultProps'
import { extendCss } from '../utils'

const RESERVED_WORDS = [
  'size',
  'gap',
  'padding',
  'gutter',
  'columns',
  'colCss',
  'rowCss'
]

const Element = ({
  children,
  tag,
  css,
  breakpoints = {},
  baseSize,
  ...props
}) => {
  const breakpointKeys = Object.keys(breakpoints)
  const breakpointsProps = pick(props, breakpointKeys)
  const context = pick(props, RESERVED_WORDS)

  const cssHelper = extendCss(css)
  const Container = cssHelper
    ? styled(Styled)`
        ${cssHelper}
      `
    : Styled

  return (
    <Container
      as={tag}
      breakpoints={breakpoints}
      baseSize={baseSize}
      {...omit(props, RESERVED_WORDS)}
    >
      <Context.Provider
        value={{
          breakpointKeys,
          breakpoints,
          baseSize,
          ...breakpointsProps,
          ...context
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
