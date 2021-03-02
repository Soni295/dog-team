import './style.css'
export const InputSearch = ({list, value, handleChange}) => {
  return(
    <input
      className='Search__input'
      type='text'
      value={value}
      onChange={e => handleChange(e.target.value)}
      placeholder='Type to Search'
      autoComplete='off'
      list={list}
    />
  )
}
