import { useEffect, useContext } from 'react'
import { useButton } from './reducer'
import { MyTeamContext } from '../../../../context/MyTeamContext'
import './style.css'

export const AddDog = ({link, breed}) => {
  const [stateButton, setStateButton] = useButton()
  const [myTeam, dispatch, block] = useContext(MyTeamContext)

  useEffect(()=> {
    const existDogInThisArr = block.breeds.indexOf(breed) !== -1

    if( existDogInThisArr || block.total === 10){
      if(stateButton.type !== 'remove') {
        setStateButton({type: 'disabled'})
      }
    }
    else{
      if(stateButton.type === 'disabled'){
        setStateButton({type: 'add'})
      }
    }
  }, [block, breed])


  useEffect(()=>{
    if(myTeam[breed]){
      if(myTeam[breed].links.indexOf(link) !== -1) {
        setStateButton({type: 'remove'})
      }
    }
  }, [breed, myTeam])


  const handleDispatch = () => {
    const { type } = stateButton 
    dispatch({type, breed, link})
    const newType = type === 'add'
      ? 'remove'
      : 'add'
    setStateButton({type: newType})
  }

  const text = stateButton.type === 'add'
    ? 'Add to my team' 
    : stateButton.type === 'remove' 
      ? 'Remove to my team' 
      : 'Can\'t add this dog' 

  return(
    <>
     <input 
        className={'card__button-'+stateButton.type}
        type="button" 
        value={text}
        disabled={stateButton.disabled}
        onClick={() => handleDispatch()}
      />
    </>
  )
}
