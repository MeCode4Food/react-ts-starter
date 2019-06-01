import { AppActions, AppActionTypes } from 'src/actions/app-actions';


const initialState = {
  showSidebar: true
}

const appReducer = (state = initialState, action: AppActions) => {
  const { showSidebar } = state
  switch (action.type) {
    case AppActionTypes.TOGGLE_SIDEBAR:
      const newSidebarState = !showSidebar
      return {  ...state, showSidebar: newSidebarState }  
    default:
      return state
  }
}

export type AppMiscState = ReturnType<typeof appReducer>
export default appReducer