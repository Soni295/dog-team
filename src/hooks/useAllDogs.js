import { useEffect, useState } from 'react'
import { getDogsApi } from '../services/getDogsApi'


// Hook

export const useAllDogs = breed => {
  const [dogs, setDogs] = useState({data: [], msg: ''}) 
  const [isLoading, setIsLoading] = useState(false) 

  useEffect(() => {
    if(breed !== undefined){  
      setIsLoading(true)
      getDogsApi(breed)
        .then(response => {
          setIsLoading(false)
          setDogs(response)
      }) 
    }
  }, [breed])

  return {dogs: dogs.data, msg: dogs.msg, isLoading}
}
