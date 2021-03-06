import reducer, { initialState } from 'Browse/reducer'
import * as actions from 'Browse/actions'
import { resetFilter, setFilter } from 'FilterBox/actions'
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

describe('LOAD_CATEGORY_DATA', () => {
  it('returns expected new state', () => {
    const category = 'mounts'
    const expectedNewState = {
      ...mockState,
      [category]: MOCKS.CATEGORY_DATA
    }

    const action = actions.loadCategoryData(MOCKS.CATEGORY_DATA, category)
    const newState = reducer(mockState, action)

    expect(newState).toEqual(expectedNewState)
  })
})

describe('RESET_FILTER', () => {
  it('returns expected new state', () => {
    mockState.filter = 'foo'

    const expectedNewState = {
      ...mockState,
      filter: ''
    }

    const action = resetFilter()
    const newState = reducer(initialState, action)

    expect(newState).toEqual(expectedNewState)
  })
})

describe('SET_FILTER', () => {
  it('returns expected new state', () => {
    const filterValue = 'foo'

    const expectedNewState = {
      ...mockState,
      filter: filterValue
    }

    const action = setFilter(filterValue)
    const newState = reducer(initialState, action)

    expect(newState).toEqual(expectedNewState)
  })
})
