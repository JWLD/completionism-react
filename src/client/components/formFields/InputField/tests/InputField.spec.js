import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { InputField } from 'components/formFields'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  input: {},
  placeholder: '',
  StyledComponent: jest.fn()
}

describe('<InputField />', () => {
  it('renders correctly', () => {
    const component = shallow(<InputField {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
