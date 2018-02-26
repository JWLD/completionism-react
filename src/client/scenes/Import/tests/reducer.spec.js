import reducer, { initialState } from 'scenes/Import/reducer'
import * as actions from 'scenes/Import/actions'

import * as MOCKS from 'fixtures'

describe('#importReducer', () => {
  it('returns initialState when passed undefined', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })
})

describe('ADD_REALM_DATA', () => {
  it('returns expected new state', () => {
    const region = 'eu'

    const expectedNewState = {
      realms: {
        [region]: MOCKS.REALM_DATA
      }
    }

    const action = actions.addRealmData(MOCKS.REALM_DATA, region)
    const newState = reducer(initialState, action)

    expect(newState).toEqual(expectedNewState)
  })
})
