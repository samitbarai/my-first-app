import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'

const IndexPage = () => (
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>First Attempt <br /> to Design in React</h1>
        <p>This is my first take on a React website looking at Design+Code tutorial</p>
        <Link to="/page-2/">Know more</Link>
      </div>
    </div>
    <div className = "Cards">
      <h2> 11 more courses left </h2>
      <div className = "CardGroup" >
      <Card
        title = "React for Samit"
        text = "12 sections"
        image = {require('../images/wallpaper.jpg')} 
      />
      <Card
        title = "React for Samit"
        text = "12 sections"
        image = {require('../images/wallpaper.jpg')} 
      />
      <Card
        title = "React for Samit"
        text = "12 sections"
        image = {require('../images/wallpaper.jpg')} 
      />
      <Card
        title = "React for Samit"
        text = "12 sections"
        image = {require('../images/wallpaper.jpg')} 
      />
      </div>
    </div>
  </div>
)

export default IndexPage
