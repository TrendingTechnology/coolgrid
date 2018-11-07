import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-styled-components'

declare global {
  namespace NodeJS {
    interface Global {
      React: any;
      testFor: any;
      TEST_COMPONENT: any;
    }
  }
}

global.TEST_COMPONENT = 'COMPONENT PROPS'

Enzyme.configure({ adapter: new Adapter() })
