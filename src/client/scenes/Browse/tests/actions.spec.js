import configureStore from 'redux-mock-store'
import reduxThunk from 'redux-thunk'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

import { CATEGORY_DATA_URL } from 'constants/api_urls'
import { CATEGORY_DATA } from 'fixtures'
import * as actions from 'scenes/Browse/actions'

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
      .reply(200, CATEGORY_DATA)

    const expectedActions = [actions.addCategoryData(CATEGORY_DATA, category)]
    await store.dispatch(actions.fetchCategoryData(category))

    expect(store.getActions()).toEqual(expectedActions)
  })
})
