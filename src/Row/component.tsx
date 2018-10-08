import React from 'react'
import RowCtx from './context'
import Row from './styled'
import { Ctx as ContainerCtx } from '../Container'
import { Props, Context } from './types'

const Element = ({
  tag,
  children,
  extendCss,
  extendColCss,
  gap,
  gutter,
  ...props
}: Props) => {
  const Component: any = tag ? Row.withComponent(tag) : Row

  return (
    <ContainerCtx.Consumer>
      {({
        extendRowCss,
        extendColCss: containerExtendColCss,
        ...ctx
      }: Context) => (
        <RowCtx.Provider
          value={{
            ...ctx,
            ...props,
            gap,
            extendCss: extendColCss || containerExtendColCss,
          }}
        >
          <Component
            gap={gap}
            gutter={gutter}
            extendCss={extendCss || extendRowCss}
          >
            {children}
          </Component>
        </RowCtx.Provider>
      )}
    </ContainerCtx.Consumer>
  )
}

Element.displayName = '@mosquito-ui/grid/Row'

export default Element
