import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { FilterBox, mapStateToProps } from 'scenes/Browse/components/FilterBox'
import * as MOCKS from 'fixtures'

Enzyme.configure({ adapter: new Adapter() })

const mockResetFilterFunc = jest.fn()
const mockSetFilterFunc = jest.fn()

let component = null
let mockProps = {}

beforeEach(() => {
  mockProps = {
    filterValue: '',
    resetFilter: mockResetFilterFunc,
    setFilter: mockSetFilterFunc
  }

  jest.resetAllMocks()

  component = shallow(<FilterBox {...mockProps} />)
})

describe('<FilterBox />', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('#setFilter', () => {
  let inputComponent = null

  beforeAll(() => {
    inputComponent = component.find('FilterInput')
  })

  it('is called when user types in input field', () => {
    inputComponent.simulate('change', { target: { value: '' } })

    expect(mockSetFilterFunc).toHaveBeenCalledTimes(1)
  })

  it('is called with the correct value', () => {
    const inputValue = 'foo'
    inputComponent.simulate('change', { target: { value: inputValue } })

    expect(mockSetFilterFunc).toHaveBeenCalledWith(inputValue)
  })
})

describe('#resetFilter', () => {
  it('is called when user clicks on clear input button', () => {
    const buttonComponent = component.find('ClearInputBtn')
    buttonComponent.simulate('click')

    expect(mockResetFilterFunc).toHaveBeenCalledTimes(1)
  })
})

describe('#mapStateToProps', () => {
  it('extracts the required data from state', () => {
    const result = mapStateToProps(MOCKS.INITIAL_STATE, mockProps)

    expect(Object.keys(result)).toHaveLength(1)
    expect(result).toHaveProperty('filterValue')
  })
})
