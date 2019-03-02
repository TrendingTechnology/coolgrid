import React from 'react'
import { pick, omit, get } from 'lodash'
import Context from './context'
import Styled from './styled'
import { extendCss } from '../utils'
import theme from '../theme'

const RESERVED_WORDS = ['size', 'gap', 'padding', 'gutter', 'colCss', 'rowCss']

const Element = ({
  theme,
  children,
  tag,
  css,
  breakpoints,
  columns,
  baseSize,
  ...props
}) => {
  const gridConfiguration = {
    ...get(theme, 'grid', {}),
    ...(baseSize ? { baseSize } : {}),
    ...(columns ? { columns } : {}),
    ...(breakpoints ? { breakpoints } : {})
  }

  const breakpointKeys = Object.keys(gridConfiguration.breakpoints || {})
  const breakpointsProps = pick(props, breakpointKeys)
  const context = pick(props, RESERVED_WORDS)

  // console.log(gridConfiguration)

  return (
    <Styled
      as={tag}
      extendCss={extendCss(css)}
      {...gridConfiguration}
      {...omit(props, RESERVED_WORDS)}
    >
      <Context.Provider
        value={{
          breakpointKeys,
          ...gridConfiguration,
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
Element.defaultProps = { ...theme }

export default Element
