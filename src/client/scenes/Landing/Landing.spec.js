import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Landing from 'scenes/Landing'
import { mockMounts } from 'fixtures/local_storage'

Enzyme.configure({ adapter: new Adapter() })

localStorage.mounts = mockMounts

describe('<Landing />', () => {
  test('renders correctly', () => {
    const component = shallow(<Landing />)

    expect(component).toMatchSnapshot()
  })
})
