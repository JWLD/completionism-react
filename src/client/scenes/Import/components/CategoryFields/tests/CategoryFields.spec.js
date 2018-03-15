import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CategoryFields from 'CategoryFields'

Enzyme.configure({ adapter: new Adapter() })

describe('<CategoryFields />', () => {
  it('renders correctly', () => {
    const component = shallow(<CategoryFields />)

    expect(component).toMatchSnapshot()
  })
})
