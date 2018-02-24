import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CheckboxField } from 'components/formFields'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  input: {},
  StyledComponent: jest.fn()
}

describe('<CheckboxField />', () => {
  it('renders correctly', () => {
    const component = shallow(<CheckboxField {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
