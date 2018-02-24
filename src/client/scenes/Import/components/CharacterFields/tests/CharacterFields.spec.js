import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import {
  CharacterFields,
  mapStateToProps
} from 'scenes/Import/components/CharacterFields'
import * as MOCKS from 'fixtures'

Enzyme.configure({ adapter: new Adapter() })

const mockFetchRealmDataFunc = jest.fn()

const mockProps = {
  fetchRealmData: mockFetchRealmDataFunc,
  realmData: {},
  realmList: {
    eu: []
  },
  region: ''
}

const component = shallow(<CharacterFields {...mockProps} />)

beforeEach(() => {
  mockFetchRealmDataFunc.mockReset()
})

describe('<CharacterFields />', () => {
  it('renders correctly', () => {
    expect(component).toMatchSnapshot()
  })
})

describe('#onRegionChange', () => {
  it('calls [getRealmData]', () => {
    const getRealmDataSpy = jest.spyOn(
      CharacterFields.prototype,
      'getRealmData'
    )
    const mockEvent = { target: { value: 'foo ' } }
    component.instance().onRegionChange(mockEvent)

    expect(getRealmDataSpy).toHaveBeenCalledTimes(1)
  })
})

describe('#getRealmData', () => {
  it('calls [fetchRealmData] when state doesnt contain relevant realm data', () => {
    component.instance().getRealmData('us')

    expect(mockFetchRealmDataFunc).toHaveBeenCalledTimes(1)
  })

  it('doesnt call [fetchRealmData] when state contains relevant realm data', () => {
    component.instance().getRealmData('eu')

    expect(mockFetchRealmDataFunc).not.toHaveBeenCalled()
  })
})

describe('#mapStateToProps', () => {
  it('extracts the required data from state', () => {
    const result = mapStateToProps(MOCKS.INITIAL_STATE)

    expect(Object.keys(result)).toHaveLength(3)
    expect(result).toHaveProperty('realmData')
    expect(result).toHaveProperty('realmList')
    expect(result).toHaveProperty('region')
  })
})
