import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar bg-body-secondary rounded">
  <div className="container-fluid">
    <a className="navbar-brand">Users Details</a>
    <form className="d-flex" role="search">
      <Link to={"/add"} className="btn btn-primary">Add User</Link>
    </form>
  </div>
</nav>
  )
}

export default Navbar