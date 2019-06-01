import Cat from 'src/model/cat';
import { ActionCreator } from 'redux';

export const addCat: ActionCreator<AddCatAction> = (catName: string) => {
  console.log('inside action creator')
  const newCat = new Cat(catName)
  return { type: CatActionTypes.ADD_CAT, payload: newCat }
}

export const removeCat: ActionCreator<RemoveCatAction> = (catNumber: number) => {
  return { type: CatActionTypes.REMOVE_CAT, payload: catNumber }
}

export interface AddCatAction {
  type: CatActionTypes.ADD_CAT
  payload: Cat
}

export interface RemoveCatAction {
  type: CatActionTypes.REMOVE_CAT
  payload: number
}

export type CatActions = AddCatAction | RemoveCatAction

export enum CatActionTypes {
  ADD_CAT = "ADD_CAT",
  REMOVE_CAT = "REMOVE_CAT"
}
