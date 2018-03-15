import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { fetchCharData } from 'ImportForm/utils'
import * as MOCKS from 'fixtures'
import { IMPORT_URL } from 'constants/api_urls'

const mock = new MockAdapter(axios)

describe('#fetchCharData', () => {
  it('fetches data from BattleNet and saves it to localStorage', () => {
    mock.onGet(IMPORT_URL).reply(200, MOCKS.BNET_CHARACTER_DATA)

    fetchCharData(MOCKS.IMPORT_FORM_VALUES)

    setTimeout(() => {
      expect(localStorage).toEqual(MOCKS.LOCAL_STORAGE)
    }, 1)
  })
})
