import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import SidePanel from 'SidePanel'

Enzyme.configure({ adapter: new Adapter() })

describe('<SidePanel />', () => {
  it('renders correctly', () => {
    const component = shallow(<SidePanel />)

    expect(component).toMatchSnapshot()
  })
})
