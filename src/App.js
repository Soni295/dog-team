import { useEffect, useState } from 'react'
import { MyteamProvider } from './context/MyTeamContext'
import { getBreedsList } from './services/getBreedsList'
import {
  BrowserRouter as BR,
  Switch, Route, 
} from 'react-router-dom'
import { Home } from './pages/Home'
import { MyTeam } from './pages/MyTeam'
import { SearchPage } from './pages/SearchPage'
import { NavBar } from './components/Molecules/NavBar/NavBar'
import './index.css'

export const App = () => {

  const [listOfBreeds, setListOfBreeds] = useState([])

  useEffect(()=>{
    getBreedsList().then(r => setListOfBreeds(r))
  }, [])
  return (
    <BR>
      <NavBar />
      <Switch>
        <MyteamProvider>
        <Route exact 
          path='/' 
          render={props => 
            <Home {...props} listOfBreeds={listOfBreeds} />
          }
        />
        <Route exact 
          path='/Search/:breed' 
          render={props => 
            <SearchPage {...props} listOfBreeds={listOfBreeds} />} 
        />
        <Route exact
          path='/MyTeam' 
          render={props => <MyTeam{...props} />} 
        />
        </MyteamProvider>
      </Switch>
    </BR>
  );
}
