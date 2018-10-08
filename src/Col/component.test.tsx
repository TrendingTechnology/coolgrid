import React from 'react'
import { shallow } from 'enzyme'
import Component from '.'

global.testFor(Component, () => {
  describe(MSG_RENDERER, () => {
    it('renders correctly', async () => {
      const tree = shallow(<Component />)
      expect(tree).toMatchSnapshot()
    })
  })
})
