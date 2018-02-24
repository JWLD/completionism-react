import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Landing from 'scenes/Landing'
import * as mocks from 'fixtures'

Enzyme.configure({ adapter: new Adapter() })

localStorage.mounts = mocks.localStorageItem

describe('<Landing />', () => {
  it('renders correctly', () => {
    const component = shallow(<Landing />)

    expect(component).toMatchSnapshot()
  })
})
