import React from 'react'
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

  return (
    <Styled
      as={tag}
      breakpoints={breakpoints}
      baseSize={baseSize}
      extendCss={extendCss(css)}
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
    </Styled>
  )
}

Element.displayName = 'mosquito-ui/grid/Container'
Element.defaultProps = defaultProps

export default Element
