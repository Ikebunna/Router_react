import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";


const Home = () => {
  return (
    <div id="about">
        <h1>{name}</h1>
        <Link to={"/"}>About</Link>

    </div>
  )
}

export default Home
