import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { SelectBoxField } from 'formFields'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  input: {},
  options: {
    foo: 'bar'
  },
  placeholder: 'Fantabulous',
  StyledComponent: jest.fn()
}

describe('<SelectBoxField />', () => {
  it('renders correctly', () => {
    const component = shallow(<SelectBoxField {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
