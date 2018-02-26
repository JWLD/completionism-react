import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Browse } from 'scenes/Browse'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  category: '',
  categoryData: [],
  fetchCategoryData: jest.fn()
}

describe('<Browse />', () => {
  it('renders correctly', () => {
    const component = shallow(<Browse {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
