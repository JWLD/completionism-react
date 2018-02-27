import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import * as MOCKS from 'fixtures'
import { ItemList, mapStateToProps } from 'scenes/Browse/components/ItemList'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  blocks: [
    {
      name: 'Drop',
      items: [{ ...MOCKS.MOUNT_ENTRY, collected: true }]
    }
  ],
  content: 1,
  progress: {
    count: 1,
    total: 2
  },
  ...MOCKS.BROWSE_ROUTER_PROPS
}

describe('<ItemList />', () => {
  it('renders correctly', () => {
    const component = shallow(<ItemList {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})

describe('#mapStateToProps', () => {
  it('extracts the required data from state', () => {
    const result = mapStateToProps(MOCKS.INITIAL_STATE, mockProps)

    expect(Object.keys(result)).toHaveLength(3)
    expect(result).toHaveProperty('blocks')
    expect(result).toHaveProperty('content')
    expect(result).toHaveProperty('progress')
  })
})
