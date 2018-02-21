import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { fetchCharData } from 'scenes/Import/ImportForm/utils'
import * as mocks from 'fixtures'

const mock = new MockAdapter(axios)

describe('#fetchCharData', () => {
  it('fetches data from BattleNet and saves it to localStorage', () => {
    mock.onGet('/api/import').reply(200, mocks.battleNetCharacterData)

    fetchCharData(mocks.importFormValues)

    setTimeout(() => {
      expect(localStorage).toEqual(mocks.localStorageObject)
    }, 1)
  })
})
