import { CatActionTypes } from './types'
import Cat from 'src/model/cat';
import { ActionCreator } from 'redux';

export const addCat: ActionCreator<AddCatAction> = (catName: string) => {
  console.log('inside action creator')
  const newCat = new Cat(catName)
  return { type: CatActionTypes.ADD_CAT, payload: newCat }
}

export const removeCat: ActionCreator<RemoveCatAction> = (catName: string) => {
  return { type: CatActionTypes.REMOVE_CAT, payload: catName }
}

export interface AddCatAction {
  type: CatActionTypes.ADD_CAT
  payload: Cat
}

export interface RemoveCatAction {
  type: CatActionTypes.REMOVE_CAT
  payload: string
}

export type CatActions = AddCatAction | RemoveCatAction