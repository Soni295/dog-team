import { createContext, useReducer, useEffect } from 'react'
import { initialState, reducer, blockReducer } from './dogStorereducer'

export const MyTeamContext = createContext()

export const MyteamProvider = ({children}) => {

  const [block, dispatchBlock] = useReducer(blockReducer, {total: 0, breeds: []})
  const [myTeam, dispatch] = useReducer(reducer, initialState)

  useEffect(()=>{
    let total = 0
    let breeds = []
    for(let item in myTeam){
      if(myTeam[item].links.length >= 3){
        breeds = breeds.concat(item)
      }
      total += myTeam[item].links.length
    }
    dispatchBlock({type: 'update', total, breeds})

  }, [myTeam])


  return( 
    <MyTeamContext.Provider value={[myTeam, dispatch, block, dispatchBlock]}>
      {children}
    </MyTeamContext.Provider>
  )
}
