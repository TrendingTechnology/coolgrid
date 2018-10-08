import React from 'react'
import { shallow } from 'enzyme'
import Component from './styled'

describe('Row - styled component', () => {
  it('renders correctly', async () => {
    const tree = shallow(<Component />)
    expect(tree).toMatchSnapshot()
  })
})
