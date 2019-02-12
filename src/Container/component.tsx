import React from 'react'
import styled from 'styled-components'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import Context from './context'
import Styled from './styled'
import { Props } from './types'
import defaultProps from './defaultProps'
import { extendCss } from '../utils'

const RESERVED_WORDS: string[] = [
  'size',
  'gap',
  'padding',
  'gutter',
  'columns',
  'colCss',
  'rowCss',
]

const Element = ({
  children,
  tag,
  css,
  breakpoints,
  baseSize,
  ...props
}: Props) => {
  const breakpointKeys: string[] = Object.keys(breakpoints)
  const breakpointsProps: object = pick(props, breakpointKeys)
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
