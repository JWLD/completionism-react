import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ClearInputBtn } from 'scenes/Browse/components/FilterBox/styled'

Enzyme.configure({ adapter: new Adapter() })

let mockProps = {}

beforeEach(() => {
  mockProps = {
    active: true
  }
})

describe('<ClearInputBtn />', () => {
  it('handles [active] prop correctly when true', () => {
    const component = shallow(<ClearInputBtn {...mockProps} />)

    expect(component).toMatchSnapshot()
  })

  it('handles [active] prop correctly when false', () => {
    mockProps.active = false
    const component = shallow(<ClearInputBtn {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
