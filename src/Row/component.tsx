import React from 'react'
import RowCtx from './context'
import Row from './styled'
import { Ctx as ContainerCtx } from '../Container'
import { Props, Context } from './types'
import { calculateBreakpointOptions } from '../utils'

const Element = ({
  children,
  tag,
  columns,
  size,
  extendCss,
  extendColCss,
  extendColProps,
  ...props
}: Props) => {
  return (
    <ContainerCtx.Consumer>
      {({
        breakpoints,
        breakpointKeys,
        columns: ctxColumns,
        extendRowCss,
        extendRowProps,
        extendColCss: extendColCssContainerProvider,
        extendColProps: extendColPropsContainerProvider,
        ...ctx
      }: Context) => {
        const breakpointOptions = calculateBreakpointOptions(
          breakpointKeys,
          breakpoints,
          Object.assign({}, ctx, props),
          ['gap', 'gutter']
        )

        return (
          <Row
            as={tag}
            breakpoints={breakpointOptions}
            extendCss={extendCss || extendRowCss}
            {...extendRowProps}
            {...props}
          >
            <RowCtx.Provider
              // pass values to Columns via context
              value={{
                ...ctx,
                breakpointKeys,
                breakpoints,
                gap: props.gap,
                padding: props.padding,
                columns: columns || ctxColumns,
                size,
                extendCss: extendColCss || extendColCssContainerProvider,
                ...(extendColProps || extendColPropsContainerProvider || {}),
              }}
            >
              {children}
            </RowCtx.Provider>
          </Row>
        )
      }}
    </ContainerCtx.Consumer>
  )
}

Element.displayName = 'mosquito-ui/grid/Row'

export default Element
