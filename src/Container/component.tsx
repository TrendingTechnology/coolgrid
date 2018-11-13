import React from 'react'
import styled from 'styled-components'
import pick from 'lodash/pick'
import omit from 'lodash/omit'
import Context from './context'
import Styled from './styled'
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

  const css = extendCss
  const Container = css
    ? styled(Styled)`
        ${css}
      `
    : Styled

  return (
    <Container
      as={tag}
      breakpoints={breakpoints}
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
