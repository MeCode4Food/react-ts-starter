import { combineReducers } from 'redux'
import catPageReducer from './cat-page-reducer'
import appReducer from './app-reducer';

const mainReducer = combineReducers({
  catPage: catPageReducer,
  appMisc: appReducer
})

export type STORE_STATE = ReturnType<typeof mainReducer>
export default mainReducer