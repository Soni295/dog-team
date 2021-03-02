import { ListOfLinks } from '../components/Molecules/ListOfLinks/ListOfLinks'
import { H1 } from '../components/Atoms/H/H1/H1'

export const Home = ({listOfBreeds}) => {
  return(
    <>
      <H1 text="Home Page" />
      <ListOfLinks list={listOfBreeds} />
    </>
  )
}
