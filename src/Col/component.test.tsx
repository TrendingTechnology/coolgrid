import { shallow } from 'enzyme'
import Component from '.'

describe(Component.displayName, () => {
  describe(TEST_COMPONENT, () => {
    it('component renders correctly', async () => {
      const tree = shallow(<Component />)
      expect(tree).toMatchSnapshot()
    })
  })
})
