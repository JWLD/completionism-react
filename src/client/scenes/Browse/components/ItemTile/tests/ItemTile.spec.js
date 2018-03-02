import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ItemTile } from 'scenes/Browse/components/ItemTile'

Enzyme.configure({ adapter: new Adapter() })

let mockProps = {}

beforeEach(() => {
  mockProps = {
    collected: true,
    name: 'foo',
    quality: 1,
    setActiveItem: jest.fn()
  }
})

describe('<ItemTile />', () => {
  it('renders correctly', () => {
    const component = shallow(<ItemTile {...mockProps} />)

    expect(component).toMatchSnapshot()
  })

  it('renders when [collected] prop is false', () => {
    mockProps.collected = false
    const component = shallow(<ItemTile {...mockProps} />)

    expect(component).toMatchSnapshot()
  })

  it('renders when passed an [icon] prop', () => {
    mockProps.icon = 'foo'
    const component = shallow(<ItemTile {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
