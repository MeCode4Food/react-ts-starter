import { CatActions, CatActionTypes} from 'src/actions/cat-actions';
import Cat from 'src/model/cat';

const initialState = {
  cats: [
    new Cat('meow1')
  ]
}

const catPageReducer = (state = initialState, action: CatActions) => {
  const catArray = state.cats
  let newCatArray = [ ...catArray ]
  switch (action.type) {
    case CatActionTypes.ADD_CAT:
      console.log('inside reducer')
      newCatArray = [
        ...catArray,
        action.payload
      ]
      return { ...state, cats: newCatArray } 
    case CatActionTypes.REMOVE_CAT:
      newCatArray = catArray.filter((cat, index) => {
        // return only cats without names equal to name
        // also make sure the payload exists using a null check
        return index !== action.payload
      })
      return { ...state, cats: newCatArray }
    default:
      return state
  }
}

export type CatPageState = ReturnType<typeof catPageReducer>
export default catPageReducer