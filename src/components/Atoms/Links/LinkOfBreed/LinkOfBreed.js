import { Link } from 'react-router-dom'
import './style.css'

export const LinkOfBreed = ({text}) => {
  return(
    <Link className="link-of-breed" to={`/Search/${text}`}>
      {text}
    </Link>
  )
}
