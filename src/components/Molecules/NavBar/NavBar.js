import { LinkNavBar } from '../../Atoms/Links/LinkNavBar/LinkNavBar'
import './style.css'
const links = [
  {name: 'Home', link: '/'}, 
  {name: 'My team', link: '/MyTeam'}
]

export const NavBar = () => ( 
  <div className="navbar">
    {links.map(({name, link}, index) => ( 
      <LinkNavBar 
        name={name} 
        link={link} 
        key={name+index}
      />
    ))}
  </div>
) 
