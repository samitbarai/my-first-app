import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className = "Hero">
      <div className = "HeroGroup">
        <h1>First Attempt to Design in React</h1>
        <p>This is my first take on a React website looking at Design+Code tutorial</p>
        <p>This is just another paragraph to play around this thing</p>
        <Link to="/page-2/">Know more</Link>
      </div>
    </div>

  </div>
)

export default IndexPage
