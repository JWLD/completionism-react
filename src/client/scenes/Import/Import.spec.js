import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Import from 'scenes/Import'

Enzyme.configure({ adapter: new Adapter() })

describe('<Import />', () => {
  test('renders correctly', () => {
    const component = shallow(<Import />)

    expect(component).toMatchSnapshot()
  })
})
