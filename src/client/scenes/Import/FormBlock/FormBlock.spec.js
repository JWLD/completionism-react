import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import FormBlock from 'scenes/Import/FormBlock'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  fieldsComponent: {},
  header: '',
  name: ''
}

describe('<FormBlock />', () => {
  test('renders correctly', () => {
    const component = shallow(<FormBlock {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
