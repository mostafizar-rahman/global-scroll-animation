import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className='scroll-watcher'></div>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Service</Link>
        </nav>
        <header>This is the Home Page</header>
        <main>
          <div className="child-one">Child One</div>
          <div className="child-two">Child Two</div>
        </main>
        <footer>This is the Footer</footer>
      </div>
    </>
  )
}

export default App