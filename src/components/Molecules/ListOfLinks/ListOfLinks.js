import { LinkOfBreed } from '../../Atoms/Links/LinkOfBreed/LinkOfBreed'
import './style.css'
export const ListOfLinks = ({list}) => {
  return( 
    <div className="list-of-link">
      {list.map((breed, index) =>
        <LinkOfBreed 
          key={breed+index} 
          text={breed} 
        />
      )}
    </div>
  )
}
