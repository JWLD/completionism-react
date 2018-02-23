import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { CharacterFields } from 'scenes/Import/components/CharacterFields'

Enzyme.configure({ adapter: new Adapter() })

const mockProps = {
  fetchRealmData: jest.fn(),
  realmData: {},
  realmList: {},
  region: ''
}

describe('<CharacterFields />', () => {
  test('renders correctly', () => {
    const component = shallow(<CharacterFields {...mockProps} />)

    expect(component).toMatchSnapshot()
  })
})
