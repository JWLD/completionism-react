import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Import from 'Import'

Enzyme.configure({ adapter: new Adapter() })

describe('<Import />', () => {
  it('renders correctly', () => {
    const component = shallow(<Import />)

    expect(component).toMatchSnapshot()
  })
})
