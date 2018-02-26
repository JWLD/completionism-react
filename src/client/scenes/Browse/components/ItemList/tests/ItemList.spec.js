import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ItemList } from 'scenes/Browse/components/ItemList'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  blocks: [],
  content: 1,
  progress: {
    count: 1,
    total: 2
  }
}

describe('<ItemList />', () => {
  it('renders correctly', () => {
    const component = shallow(<ItemList {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
