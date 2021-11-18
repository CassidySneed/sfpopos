
import { NavLink } from 'react-router-dom'

import React from 'react';
import './Title.css';

import RandomSpace from './components/RandomSpace/RandomSpace'

function Title() {
  return (
    <div className="Title">
      <header>
        <h1>SFPOPOS</h1>
        <small className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</small>

        <div>
        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          exact
          to="/">List</NavLink>

        <NavLink
          className="nav-link"
          activeClassName="nav-link-active"
          to="/about">About</NavLink>
          <RandomSpace />
        </div>

      </header>
    </div>
  )
}

export default Title;