import React from 'react'
import {NavLink as Link} from 'react-router-dom' ;

var Nav = () => {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Timer App
            </li>
            <li>
              <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</Link>
            </li>
            <li>
              <Link to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">
              Created by <a href="/" target="_blank">Karim Yarboua</a>
            </li>
          </ul>
        </div>
      </div>
    )
};

module.exports = Nav;
