import configureStore from 'redux-mock-store'
import reduxThunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import { REALM_URL } from 'constants/api_urls'
import { MOCK_REALM_DATA } from 'fixtures'
import * as actions from 'scenes/Import/actions'

const mock = new MockAdapter(axios)
const middleware = [reduxThunk]
const mockStore = configureStore(middleware)

let store

beforeEach(() => {
  store = mockStore({})
})

describe('#fetchRealmData', () => {
  it('dispatches correct action after a successful request', async () => {
    const region = 'eu'

    mock.onGet(REALM_URL, { params: { region } }).reply(200, MOCK_REALM_DATA)

    const expectedActions = [actions.addRealmData(MOCK_REALM_DATA, region)]
    await store.dispatch(actions.fetchRealmData(region))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
