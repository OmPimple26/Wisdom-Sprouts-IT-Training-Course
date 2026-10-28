import React from 'react'
import SmallCard from './Small_Card'

const Card = ({dark}) => {
  return (
    <div style={{height:'400px',width:'400px',margin:'auto',backgroundColor:dark ? 'blue' : 'red'}}>
      <p>This is child card</p>
      <SmallCard/>
    </div>
  )
}

export default Card