import {
  regionSelector,
  realmDataSelector
} from 'scenes/Import/components/CharacterFields/selectors'
import { MOCK_INITIAL_STATE, MOCK_REALM_DATA } from 'fixtures'

let mockState

beforeEach(() => {
  mockState = JSON.parse(JSON.stringify(MOCK_INITIAL_STATE))
})

describe('#regionSelector', () => {
  test('selects correct region from state', () => {
    const expected = mockState.form.import.values.character.region
    const result = regionSelector(mockState)

    expect(result).toBe(expected)
  })
})

describe('#realmDataSelector', () => {
  test('selects and formats realm data from state', () => {
    mockState.import.realms = {
      eu: MOCK_REALM_DATA
    }

    const expected = {
      aegwynn: 'Aegwynn',
      'aerie-peak': 'Aerie Peak',
      agamaggan: 'Agamaggan'
    }
    const result = realmDataSelector(mockState)

    expect(result).toEqual(expected)
  })

  test('returns an empty object if the relevant realm data doesnt exist', () => {
    const result = realmDataSelector(mockState)

    expect(result).toEqual({})
  })
})