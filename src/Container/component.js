import React from 'react'
import {
  omittedProps, mergeObjects, createGridSettings, extendCss
} from '../utils'
import { CONTAINER_RESERVED_KEYS as RESERVED_KEYS, BASE_RESERVED_KEYS } from '../constants'
import Context from './context'
import Styled from './styled'

const Element = ({
  theme, children, tag, css, ...props
}) => {
  // output { breakpoints, baseSize, columns, breakpointKeys }
  const gridSettings = createGridSettings(props, {}, theme)

  return (
    <Styled
      as={tag}
      extendCss={extendCss(css)}
      theme={gridSettings}
      {...omittedProps(props, [...RESERVED_KEYS, ...BASE_RESERVED_KEYS])}
    >
      <Context.Provider
        value={{
          ...gridSettings,
          // pass breakpoint key props, e.g xs, md, lg
          ...mergeObjects(props, {}, gridSettings.breakpointKeys),
          ...mergeObjects(props, {}, RESERVED_KEYS)
        }}
      >
        {children}
      </Context.Provider>
    </Styled>
  )
}

Element.displayName = 'vitus-labs/coolgrid/Container'

export default Element
