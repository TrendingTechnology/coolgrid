import React from 'react'
import styled from 'styled-components'
import { pick, omit } from 'lodash'
import RowCtx from '../Row/context'
import Styled from './styled'
import { calculateBreakpointOptions, extendCss } from '../utils'

const RESERVED_WORDS = ['size', 'gap', 'padding']

const Element = ({ children, tag, css, ...props }) => (
  <RowCtx.Consumer>
    {({ breakpoints, breakpointKeys, columns, colCss, baseSize, ...ctx }) => {
      const context = {
        ...pick(ctx, RESERVED_WORDS),
        ...pick(props, RESERVED_WORDS)
      }

      const breakpointKeyProps = {
        ...pick(ctx, breakpointKeys),
        ...pick(props, breakpointKeys)
      }

      const breakpointOptions = calculateBreakpointOptions(
        breakpointKeys,
        breakpoints,
        { ...context, ...breakpointKeyProps },
        RESERVED_WORDS
      )

      const cssHelper = extendCss(css || colCss)
      const Column = cssHelper
        ? styled(Styled)`
            ${cssHelper}
          `
        : Styled

      return (
        <Column
          as={tag}
          breakpoints={breakpointOptions}
          columns={columns}
          baseSize={baseSize}
          {...omit(props, RESERVED_WORDS)}
        >
          {children}
        </Column>
      )
    }}
  </RowCtx.Consumer>
)

Element.displayName = 'mosquito-ui/grid/Col'

export default Element
