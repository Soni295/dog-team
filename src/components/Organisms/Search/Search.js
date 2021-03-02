import { SearchForm } from '../../Molecules/Forms/Search/Search'
import { AutoComplete } from '../../Atoms/DataList/AutoComplete/AutoComplete'

export const Search = ({listOfBreeds}) => {
  return(
    <div className='Search'>
      <SearchForm list='dogsList' />
      <AutoComplete
        name='dogsList'
        list={listOfBreeds}
      />
    </div>
  )
}
