import { MyTeamContext } from '../../../../context/MyTeamContext'
import { useContext, useEffect, useState } from 'react'
import { DeskDogs } from '../../../Molecules/DeskDogs/DeskDogs'
import { TitleBreed } from '../../../Atoms/P/TitleBreed/TitleBreed'

export const ContainerTeam = () => {
  const [myTeam] = useContext(MyTeamContext)
  const [myDogs, setMyDogs] = useState([])

  useEffect(()=>{
    let links = []
    let newList = []
    for(let dogs in myTeam) {
      links = myTeam[dogs].links.map(link => ({link, breed: dogs}))
      newList = newList.concat({name: dogs, links})
    }
    setMyDogs(newList)
  }, [myTeam])


  return(
    <>
      {myDogs.map(({name, links}) => 
        links.length !== 0 &&
          <div key={name}>
            <TitleBreed text={name} />
            <DeskDogs dogs={links} />
          </div>
        )
      }
    </>
  )
}


