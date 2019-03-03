import React from 'react'
import { pick, get } from 'lodash'
import Context from './context'
import Styled from './styled'
import {
  restProps,
  createGridSettings,
  extendCss,
  mergePropsWithContext
} from '../utils'
import {
  CONTAINER_RESERVED_KEYS as RESERVED_KEYS,
  BASE_RESERVED_KEYS
} from '../constants'

const Element = ({ theme, children, tag, css, ...props }) => {
  // output { breakpoints, baseSize, columns, breakpointKeys }
  const gridConfiguration = createGridSettings(
    props,
    {},
    get(theme, 'grid', {})
  )

  return (
    <Styled
      as={tag}
      extendCss={extendCss(css)}
      theme={gridConfiguration}
      {...restProps(props, [...RESERVED_KEYS, ...BASE_RESERVED_KEYS])}
    >
      <Context.Provider
        value={{
          ...gridConfiguration,
          ...pick(props, gridConfiguration.breakpointKeys),
          ...pick(props, RESERVED_KEYS)
        }}
      >
        {children}
      </Context.Provider>
    </Styled>
  )
}

Element.displayName = 'mosquito-ui/grid/Container'

export default Element
