import store from 'redux/store'
import { fetchCategoryData } from 'redux/actions'
import CATEGORIES from 'constants/categories'

const fetchApiData = () => {
  CATEGORIES.forEach(category => {
    store.dispatch(fetchCategoryData(category.key))
  })
}

const appInitialiser = () => {
  fetchApiData()
}

export default appInitialiser
