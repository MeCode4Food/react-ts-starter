import { ActionCreator } from 'redux'

export const toggleSidebar: ActionCreator<ToggleSidebarAction> = () => {
  return { type: AppActionTypes.TOGGLE_SIDEBAR }
}

export interface ToggleSidebarAction {
  type: AppActionTypes.TOGGLE_SIDEBAR
}
export type AppActions = ToggleSidebarAction

export enum AppActionTypes {
  TOGGLE_SIDEBAR = 'TOGGLE_SIDERBAR'
}

