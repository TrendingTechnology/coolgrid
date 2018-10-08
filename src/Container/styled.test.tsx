import React from 'react'
import { shallow } from 'enzyme'
import Component from './styled'

const requiredProps = {
  breakpoints: {},
  extendCss: '',
}

describe('Container - styled component', () => {
  it('renders correctly', async () => {
    const tree = shallow(<Component {...requiredProps} />)
    expect(tree).toMatchSnapshot()
  })
})
