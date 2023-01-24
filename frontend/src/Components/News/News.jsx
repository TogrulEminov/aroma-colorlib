import React from 'react'
import NewsCard from './NewsCard/NewsCard'
import NewsTitle from './NewsTitle/NewsTitle'
import "./_News.scss"
const News = () => {
  return (
    <div className='newsSection'>
      <div className="container-fluid">
        <NewsTitle />
        <NewsCard />
      </div>
    </div>
  )
}

export default News