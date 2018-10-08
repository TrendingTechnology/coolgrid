import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

declare global {
  namespace NodeJS {
    interface Global {
      React: any;
      testFor: any;
      MSG_RENDERER: any;
    }
  }
}

declare var MSG_RENDERER: any
declare const testFor: any

global.testFor = (component: any, callback: any) =>
  describe('\r\n' + component.displayName + '\r\n', callback)
global.MSG_RENDERER = '-- COMPONENT --'

Enzyme.configure({ adapter: new Adapter() })
