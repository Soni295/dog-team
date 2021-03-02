import { useParams } from 'react-router-dom'
import { useAllDogs } from '../../../hooks/useAllDogs'
import { ErrorMessage } from '../../Atoms/P/ErrorMessage/ErrorMessage'
import { LoadingCircle } from '../../Atoms/Loading/Circle/Circle'
import { DeskDogs } from '../../Molecules/DeskDogs/DeskDogs'
import './style.css'

export const DogsContainer = () => {
  const { breed } = useParams()
  const {dogs, msg, isLoading} = useAllDogs(breed)

  return(
    <>
      {isLoading 
        ? <LoadingCircle />
        : <DeskDogs dogs={dogs} />
      }
      {msg !== '' && <ErrorMessage text={msg}/>}
    </>
  )
}
