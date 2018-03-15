import {
  categoryParamSelector,
  categoryDataExistsSelector
} from 'Browse/selectors'
import * as MOCKS from 'fixtures'

let mockProps = {}
let mockState = {}

beforeEach(() => {
  mockProps = JSON.parse(JSON.stringify(MOCKS.BROWSE_ROUTER_PROPS))
  mockState = JSON.parse(JSON.stringify(MOCKS.INITIAL_STATE))
})

describe('#categoryParamSelector', () => {
  it('selects correct parameter from state', () => {
    const category = 'mounts'
    mockProps.match.params.category = category

    const result = categoryParamSelector(mockState, mockProps)

    expect(result).toEqual(category)
  })
})

describe('#categoryDataExistsSelector', () => {
  it('returns true when category data exists', () => {
    const category = 'mounts'
    mockState.browse[category] = MOCKS.CATEGORY_DATA

    const result = categoryDataExistsSelector(mockState, mockProps)

    expect(result).toEqual(true)
  })

  it('returns false when category data does not exist', () => {
    const result = categoryDataExistsSelector(mockState, mockProps)

    expect(result).toEqual(false)
  })
})
