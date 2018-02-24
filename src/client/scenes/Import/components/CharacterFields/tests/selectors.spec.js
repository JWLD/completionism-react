import { realmDataSelector } from 'scenes/Import/components/CharacterFields/selectors'
import * as MOCKS from 'fixtures'

let mockState

beforeEach(() => {
  mockState = JSON.parse(JSON.stringify(MOCKS.INITIAL_STATE))
})

describe('#realmDataSelector', () => {
  it('selects and formats realm data from state', () => {
    mockState.import.realms = {
      eu: MOCKS.REALM_DATA
    }

    const expected = {
      aegwynn: 'Aegwynn',
      'aerie-peak': 'Aerie Peak',
      agamaggan: 'Agamaggan'
    }
    const result = realmDataSelector(mockState)

    expect(result).toEqual(expected)
  })

  it('returns an empty object if the relevant realm data doesnt exist', () => {
    const result = realmDataSelector(mockState)

    expect(result).toEqual({})
  })
})
