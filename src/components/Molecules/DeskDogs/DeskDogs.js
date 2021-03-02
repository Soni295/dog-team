import { Card } from '../Card/Card'

export const DeskDogs = ({dogs}) => {

  return(
    <div className="dog-container">
        {dogs.map(({link, breed}, index) => 
          <Card 
            link={link} 
            breed={breed} 
            key={link+index} 
          />
        )}
    </div>
  )
}
