import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { animation_context } from '../context/animationProvider'

const About = () => {
  const { ref } = useContext(animation_context)

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Service</Link>
      </nav>
      <header>This is the Home Page</header>
      <main ref={ref}>
        <div className="child-one">Child One</div>
        <div className="child-two">Child Two</div>
      </main>
      <footer>This is the Footer</footer>
    </div>
  )
}

export default About