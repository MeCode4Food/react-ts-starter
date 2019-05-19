import { combineReducers } from 'redux'
import catPageReducer from './cat_page_reducer'

const mainReducer = combineReducers({
  catPage: catPageReducer
})

export type STORE_STATE = ReturnType<typeof mainReducer>
export default mainReducer