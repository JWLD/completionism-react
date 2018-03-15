import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import DetailPanel from 'DetailPanel'

Enzyme.configure({ adapter: new Adapter() })

describe('<DetailPanel />', () => {
  it('renders correctly', () => {
    const component = shallow(<DetailPanel />)

    expect(component).toMatchSnapshot()
  })
})
