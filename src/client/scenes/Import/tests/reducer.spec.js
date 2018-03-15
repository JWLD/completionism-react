import reducer, { initialState } from 'Import/reducer'
import * as actions from 'Import/actions'

import * as MOCKS from 'fixtures'

let mockState

beforeEach(() => {
  mockState = initialState
})

describe('#importReducer', () => {
  it('returns initialState when passed undefined', () => {
    expect(reducer(undefined, {})).toEqual(mockState)
  })
})

describe('ADD_REALM_DATA', () => {
  it('returns expected new state', () => {
    const region = 'eu'

    const expectedNewState = {
      ...mockState,
      realms: {
        [region]: MOCKS.REALM_DATA
      }
    }

    const action = actions.addRealmData(MOCKS.REALM_DATA, region)
    const newState = reducer(mockState, action)

    expect(newState).toEqual(expectedNewState)
  })
})
