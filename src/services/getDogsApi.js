import { URL } from './config'


// Aux

const sortData = dogs => {
    // return breed of the dog in the url and url
  const dogsAndBreed = dogs
    .map(link => {
      let arr = link.split('/')
      let breed = arr
        .slice(4, arr.length -1)
        .join('')
        .replace('-', ' ')
      return { link, breed }
    })
  return dogsAndBreed 
}


// Service

export const getDogsApi = async(dog) => {
  dog = dog.split(' ') 
  let breed = dog.length === 2 
    ? `${dog[0]}/${dog[1]}` 
    : `${dog[0]}`

  const Api = `${URL}breed/${breed}/images`

  return fetch(Api)
    .then(r => r.json())
    .then(({message, status}) => 
      status === 'success' 
        ? ({data: sortData(message), msg: ''})
        : ({data: [], msg: 'Breed not found'})
    )
    .catch(() => ({data: [], msg: 'check your internet connection please'}))
}
