import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Browse } from 'scenes/Browse'

Enzyme.configure({ adapter: new Adapter() })

const mockFetchCategoryData = jest.fn()
let mockProps = {}

beforeEach(() => {
  mockProps = {
    category: '',
    categoryDataExists: false,
    fetchCategoryData: mockFetchCategoryData
  }

  jest.resetAllMocks()
})

describe('<Browse />', () => {
  it('renders correctly', () => {
    const component = shallow(<Browse {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})

describe('#componentDidMount', () => {
  it('calls [fetchCategoryData] is [categoryDataExists] is false', () => {
    shallow(<Browse {...mockProps} />)

    expect(mockFetchCategoryData).toHaveBeenCalledTimes(1)
  })

  it('does not call [fetchCategoryData] when categoryData is populated', () => {
    mockProps.categoryDataExists = true
    shallow(<Browse {...mockProps} />)

    expect(mockFetchCategoryData).toHaveBeenCalledTimes(0)
  })
})
