import { H1 } from '../Atoms/H/H1/H1'
import { Search } from '../Organisms/Search/Search'

export const HeaderHomePage = ({listOfBreeds}) => {
  return(
    <>
      <H1 text='The Breed Page' />
      <Search listOfBreeds={listOfBreeds}/>
    </>
  )
}
