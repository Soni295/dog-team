import { useEffect, useState } from 'react'
import { getBreedsList } from '../services/getBreedsList'


export const useAutoCompleteDogs = () => {
  const [AutoCompleteList, setAutoCompleteList] = useState([])

  useEffect(() => {
    getBreedsList().then( r => setAutoCompleteList(r) ) 
  }, [])

  return{AutoCompleteList}
}
