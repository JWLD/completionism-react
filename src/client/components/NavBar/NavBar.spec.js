import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import NavBar from 'components/NavBar'

Enzyme.configure({ adapter: new Adapter() })

describe('<NavBar />', () => {
  test('renders correctly', () => {
    const component = shallow(<NavBar />)

    expect(component).toMatchSnapshot()
  })
})
