import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import ProgressBar from 'ProgressBar'

Enzyme.configure({ adapter: new Adapter() })

let mockProps = {}

beforeEach(() => {
  mockProps = {
    count: 1,
    title: 'foo',
    total: 2
  }
})

describe('<ItemList />', () => {
  it('renders correctly', () => {
    const component = shallow(<ProgressBar {...mockProps} />)

    expect(component).toMatchSnapshot()
  })

  it('handles NaN percentage calculation correctly', () => {
    mockProps.count = 0
    mockProps.total = 0

    const component = shallow(<ProgressBar {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
