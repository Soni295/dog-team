import { useReducer } from 'react'
const reducer = (state, action) => {
  switch(action.type){
    case 'add':
      return {
        ...state, 
        type: 'add', 
        disabled: false 
      }
    case 'remove':
      return {
        ...state, 
        type: 'remove', 
        disabled: false 
      }
    case 'disabled': 
      return {
        ...state, 
        type: 'disabled',  
        disabled: true, 
      }
    default:
      return{
        ...state, 
        disabled: false, 
      }
  }
}


const initial = {
  disabled: false, 
  type: 'add'
}

export const useButton= () => {
  const [stateButton, setStateButton] = useReducer(reducer, initial)
  return [stateButton, setStateButton]
}
