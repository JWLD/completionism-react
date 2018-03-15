import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { Browse, mapStateToProps } from 'Browse'
import * as MOCKS from 'fixtures'

Enzyme.configure({ adapter: new Adapter() })

const mockFetchCategoryData = jest.fn()
let mockProps = {}

beforeEach(() => {
  mockProps = {
    category: '',
    categoryDataExists: false,
    fetchCategoryData: mockFetchCategoryData,
    ...MOCKS.BROWSE_ROUTER_PROPS
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

describe('#mapStateToProps', () => {
  it('extracts the required data from state', () => {
    const result = mapStateToProps(MOCKS.INITIAL_STATE, mockProps)

    expect(Object.keys(result)).toHaveLength(2)
    expect(result).toHaveProperty('category')
    expect(result).toHaveProperty('categoryDataExists')
  })
})
