import { Link } from 'react-router-dom'
import './style.css'

export const LinkNavBar = ({name, link}) => {
  return( 
    <Link to={link}>
      <p className="navbar__link">
        {name}
      </p>
    </Link>
  )
}
