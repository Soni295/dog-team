import { useReducer } from 'react'


// Aux

const findRepiteDog = (arr, link) => 
  arr.findIndex(item => item.link === link) 

const removeItem = (arr, index) => 
  (arr.slice(0, index).concat(arr.slice(index + 1)))


// Init

const initialState = JSON.parse(localStorage.getItem('My team section')) || []


// Reducer
const reducer = (state, action) => {
  const repeatDogIndex = findRepiteDog(state, action.link)
  const dog = {link: action.link, breed: action.breed}

  if(action.type == 'add'){
    const newState = repeatDogIndex === -1 
      ? state.concat(dog)
      : removeItem(state, repeatDogIndex) 
    return newState 
  }
}


// Hook

export const useAddDogStore = () => {
  const [myTeam, dispatch] = useReducer(reducer, initialState)
  return [myTeam, dispatch]
}
