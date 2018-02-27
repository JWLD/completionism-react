import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ItemIcon, ItemTitle } from 'scenes/Browse/components/ItemTile/styled'

Enzyme.configure({ adapter: new Adapter() })

describe('<ItemIcon />', () => {
  it('handles [iconUrl] prop correctly', () => {
    const component = shallow(<ItemIcon iconUrl="foo" />)

    expect(component).toMatchSnapshot()
  })
})

describe('<ItemTitle />', () => {
  it('handles [quality] prop correctly', () => {
    const component = shallow(<ItemTitle quality="1" />)

    expect(component).toMatchSnapshot()
  })
})
