import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ItemIcon, ItemTitle } from 'scenes/Browse/components/ItemTile/styled'

Enzyme.configure({ adapter: new Adapter() })

describe('<ItemIcon />', () => {
  const mockProps = {
    iconUrl: 'foo'
  }

  it('handles [iconUrl] prop correctly', () => {
    const component = shallow(<ItemIcon {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})

describe('<ItemTitle />', () => {
  const mockProps = {
    quality: 1
  }

  it('handles [quality] prop correctly', () => {
    const component = shallow(<ItemTitle {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
