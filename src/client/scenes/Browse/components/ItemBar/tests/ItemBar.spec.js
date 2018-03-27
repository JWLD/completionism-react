import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ItemBar } from 'ItemBar'

Enzyme.configure({ adapter: new Adapter() })

let mockProps = {}

beforeEach(() => {
  mockProps = {
    collected: true,
    id: 1,
    name: 'foo',
    quality: 1,
    setActiveItemId: jest.fn()
  }
})

describe('<ItemBar />', () => {
  it('renders correctly', () => {
    const component = shallow(<ItemBar {...mockProps} />)

    expect(component).toMatchSnapshot()
  })

  it('renders when [collected] prop is false', () => {
    mockProps.collected = false
    const component = shallow(<ItemBar {...mockProps} />)

    expect(component).toMatchSnapshot()
  })

  it('renders when passed an [icon] prop', () => {
    mockProps.icon = 'foo'
    const component = shallow(<ItemBar {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
