import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { ImportForm } from 'scenes/Import/components/ImportForm'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  handleSubmit: jest.fn()
}

describe('<ImportForm />', () => {
  it('renders correctly', () => {
    const component = shallow(<ImportForm {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
