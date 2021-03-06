import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Landing from 'Landing'
import * as MOCKS from 'fixtures'

Enzyme.configure({ adapter: new Adapter() })

localStorage.mounts = MOCKS.LOCAL_STORAGE_ITEM

describe('<Landing />', () => {
  it('renders correctly', () => {
    const component = shallow(<Landing />)

    expect(component).toMatchSnapshot()
  })
})
