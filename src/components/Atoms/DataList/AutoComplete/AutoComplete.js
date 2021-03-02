export const AutoComplete = ({name, list}) => {
  return( 
    <datalist id={name}>
      {list.map((item, index) => (
        <option key={item+index}>{item}</option>
      ))}
    </datalist >
  )
}
