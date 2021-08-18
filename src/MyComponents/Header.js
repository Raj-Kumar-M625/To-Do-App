import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><h1>{props.title}</h1></Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  )
}

//default props

Header.defaultProps = {
  title: "To Do List",
  searchBar: true
}


Header.prototype = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}



