export const initialState = JSON.parse(localStorage.getItem('My team section')) || {}

const removeItem = (arr, index) => 
  arr.slice(0, index).concat(arr.slice(index+1))

const changeArr = (arr, item) => {
  const indexRepeat = arr.indexOf(item)
  return removeItem(arr, indexRepeat)
}


// my Team reducer

export const reducer = (state, action) => {

  const { breed, link } = action

  const stateBreed = state[breed] || {links: []}

  let newState

  switch(action.type) {
    case 'add':
      newState = {
        ...state, 
        [breed]: {
          name: breed, 
          links: stateBreed.links.concat(link)
        } 
      }
      break
    case 'remove':
      newState = { 
        ...state,
        [breed]: {
          name: breed, 
          links: changeArr(stateBreed.links,link)
        } 
      }
      break
      default:
        return {...state}
    }

  localStorage.setItem('My team section', JSON.stringify(newState))
  return newState
}


// Block Reducer

export const blockReducer = (state, action) => {
  const { breeds, total, type } = action
  switch(type){
    default: 
      return {total, breeds}
  }
}
