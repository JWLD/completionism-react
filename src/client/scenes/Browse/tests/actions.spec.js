import configureStore from 'redux-mock-store'
import reduxThunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import { CATEGORY_DATA_URL } from 'constants/api_urls'
import * as MOCKS from 'fixtures'
import * as actions from 'Browse/actions'

const mock = new MockAdapter(axios)
const middleware = [reduxThunk]
const mockStore = configureStore(middleware)

let store

beforeEach(() => {
  store = mockStore({})
})

describe('#fetchRealmData', () => {
  it('dispatches correct action after a successful request', async () => {
    const category = 'mounts'

    mock
      .onGet(CATEGORY_DATA_URL, { params: { category } })
      .reply(200, MOCKS.CATEGORY_DATA)

    const expectedActions = [
      actions.loadCategoryData(MOCKS.CATEGORY_DATA, category)
    ]
    await store.dispatch(actions.fetchCategoryData(category))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
