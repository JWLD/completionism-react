import { itemBlocksSelector, progressDataSelector } from '../selectors'
import * as MOCKS from 'fixtures'

localStorage = MOCKS.LOCAL_STORAGE

let mockProps
let mockState

beforeEach(() => {
  mockProps = JSON.parse(JSON.stringify(MOCKS.BROWSE_ROUTER_PROPS))
  mockState = JSON.parse(JSON.stringify(MOCKS.INITIAL_STATE))
  mockState.browse.mounts = MOCKS.CATEGORY_DATA
  mockState.browse.pets = MOCKS.CATEGORY_DATA
})

describe('#itemBlocksSelector', () => {
  it('returns an empty array when state is empty', () => {
    const expected = []
    const result = itemBlocksSelector(
      MOCKS.INITIAL_STATE,
      MOCKS.BROWSE_ROUTER_PROPS
    )

    expect(result).toEqual(expected)
  })

  it('correctly divides category data into blocks', () => {
    const expected = [
      {
        name: 'Drop',
        items: [MOCKS.CATEGORY_DATA[0], MOCKS.CATEGORY_DATA[1]]
      },
      {
        name: 'Profession',
        items: [MOCKS.CATEGORY_DATA[2]]
      }
    ]

    const result = itemBlocksSelector(mockState, mockProps)

    expect(result).toEqual(expected)
  })

  it('correctly access collected info when category is pets', () => {
    mockProps.match.params.category = 'pets'

    const expected = [
      {
        name: 'Drop',
        items: [MOCKS.CATEGORY_DATA[0], MOCKS.CATEGORY_DATA[1]]
      },
      {
        name: 'Profession',
        items: [MOCKS.CATEGORY_DATA[2]]
      }
    ]

    const result = itemBlocksSelector(mockState, mockProps)

    expect(result).toEqual(expected)
  })
})

describe('#progressDataSelector', () => {
  it('returns an object when state is empty', () => {
    const expected = {
      count: 0,
      total: 0
    }
    const result = progressDataSelector(
      MOCKS.INITIAL_STATE,
      MOCKS.BROWSE_ROUTER_PROPS
    )

    expect(result).toEqual(expected)
  })

  it('returns correct count data', () => {
    const expected = {
      count: 2,
      total: 3
    }
    const result = progressDataSelector(mockState, mockProps)

    expect(result).toEqual(expected)
  })
})
