import { H4 } from '../../Atoms/H/H4/H4'
import './style.css'
import { AddDog } from '../../Atoms/Buttons/AddDog/AddDog'

export const Card = ({link, breed}) => {

  return( 
    <div className="Card">
      <div>
        <H4 text={breed} />
      </div>
      <div>
        <img className="Card__img" src={link} alt={breed}/>
      </div>
      <div>
        <AddDog
          breed={breed}
          link={link}
        />
      </div>
    </div>
  )
}
