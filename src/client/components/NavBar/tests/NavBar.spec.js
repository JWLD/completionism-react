import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { NavBar } from 'components/NavBar'

Enzyme.configure({ adapter: new Adapter() })

describe('<NavBar />', () => {
  let mockProps = {}

  beforeEach(() => {
    mockProps = {
      match: {
        params: {
          category: 'mounts',
          content: 1
        }
      }
    }
  })

  it('renders correctly', () => {
    const component = shallow(<NavBar {...mockProps} />)

    expect(component).toMatchSnapshot()
  })

  it('renders when [match.params.category] prop is null', () => {
    mockProps.match.params.category = null

    const component = shallow(<NavBar {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
