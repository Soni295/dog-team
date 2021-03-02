import { ContainerTeam } from '../components/Organisms/Containers/ContainerTeam/ContainerTeam'
import { H1 } from '../components/Atoms/H/H1/H1'

export const MyTeam = () => {
  return(
    <div className='Main'>
      <H1 text="My team section" />
      <ContainerTeam />
    </div>
  )
}
