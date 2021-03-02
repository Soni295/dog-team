import { URL } from './config'


// Aux

const flapMapDogs = ({status, message}) => {

  if(status === 'success') {
    let allDogs = []
    
    for(let breed in message){
      if(message[breed].length === 0) {
        allDogs.push(breed)
      }
      else{
        allDogs.push(breed)
        for(let type of message[breed]){
          allDogs.push(`${breed} ${type}`)
        }
      }
    }
    return allDogs
  }
}


// Service

export const getBreedsList = async () => {
  const API = `${URL}breeds/list/all`
  return fetch(API)
    .then(r => r.json())
    .then(flapMapDogs)
}
