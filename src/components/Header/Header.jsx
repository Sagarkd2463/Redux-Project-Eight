import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to={'/'} className='logo-text'>
      <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
}

export default Header;