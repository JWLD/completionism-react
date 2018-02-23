import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { InputField } from 'components/ReduxFields'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  input: {},
  placeholder: '',
  StyledComponent: jest.fn()
}

describe('<InputField />', () => {
  test('renders correctly', () => {
    const component = shallow(<InputField {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
