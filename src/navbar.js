import React from 'react'

const Navbar = ()=> {
    return (

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Recent</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" >About Us</a>
      </li>
      <li className="nav-item">
        <a className="btn btn-primary" href="#" >Sign In </a>
      </li>
    </ul>
  </div>
</nav>
    )
}
export default Navbar;