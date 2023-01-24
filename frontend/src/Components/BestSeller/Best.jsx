import React from 'react'
import BestCard from './BestCard/BestCard'
import BestTitle from './BestTitle/BestTitle'
import "./_Best.scss"
const Best = () => {
  return (
    <div className='bestSection'>
      <div className="container-fluid">
        <BestTitle />
        <BestCard />
      </div>
    </div>
  )
}

export default Best
