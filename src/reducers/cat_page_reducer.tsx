import { CatActionTypes } from 'src/actions/types';
import { CatActions} from 'src/actions';
import Cat from 'src/model/cat';

const initialState = {
  cats: [
    new Cat('meow1')
  ]
}

const catPageReducer = (state = initialState, action: CatActions) => {
  const catArray = state.cats
  switch (action.type) {
    case CatActionTypes.ADD_CAT:
      console.log('inside reducer')
      const newCatArray = [
        ...catArray,
        action.payload
      ]
      return { ...state, cats:newCatArray } 
    case CatActionTypes.REMOVE_CAT:
      catArray.filter(cat => {
        // return only cats without names equal to name
        // also make sure the payload exists using a null check
        return cat.name !== action.payload
      })
      return { ...state, cats:catArray }
    default:
      return state
  }
}

export type CatPageState = ReturnType<typeof catPageReducer>
export default catPageReducer