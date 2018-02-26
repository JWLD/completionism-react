import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { BarFill } from 'scenes/Browse/components/ProgressBar/styled'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  fill: 50
}

describe('<BarFill />', () => {
  it('handles [fill] prop correctly', () => {
    const component = shallow(<BarFill {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
