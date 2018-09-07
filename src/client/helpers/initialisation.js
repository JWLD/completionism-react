import store from 'redux/store'
import { fetchCategoryData } from 'redux/actions'

const fetchApiData = () => {
  store.dispatch(fetchCategoryData())
}

const appInitialiser = () => {
  fetchApiData()
}

export default appInitialiser
