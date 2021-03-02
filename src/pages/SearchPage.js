import { DogsContainer } from '../components/Organisms/Containers/DogContainers'
import { HeaderHomePage } from '../components/Organisms/HeaderHomePage'

export const SearchPage = ({listOfBreeds}) => {
  return (
    <>
      <HeaderHomePage listOfBreeds={listOfBreeds}/>
      <DogsContainer />
    </>
  )
}
