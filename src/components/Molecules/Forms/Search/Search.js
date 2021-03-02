import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { InputSearch } from '../../../Atoms/Inputs/InputSearch/InputSearch'
import { ButtonSearch } from '../../../Atoms/Buttons/ButtonSearch/ButtonSearch'
import './style.css'


export const SearchForm = ({list}) => {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const handleFetch = e => {
    e.preventDefault()
    if(/^\w+/.test(search)) history.push(`/search/${search}`)
    setSearch('')
  }

  return( 
    <form onSubmit={e => handleFetch(e)}>
      <InputSearch 
        value={search}
        handleChange={setSearch}
        list={list}
      />
      <ButtonSearch />
    </form>
  )
}
