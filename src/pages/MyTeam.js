import { H1 } from '../components/Atoms/H/H1/H1'
import { ContainerTeam } from '../components/Organisms/Containers/ContainerTeam/ContainerTeam'

export const MyTeam = () => {
  return(
    <div className='Main'>
      <H1 text="My team section" />
      <ContainerTeam />
    </div>
  )
}
