import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { NavBar } from 'NavBar'

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

  it('correctly sets prevPage and nextPage to loop content', () => {
    mockProps.match.params.content = 9

    const component = shallow(<NavBar {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
