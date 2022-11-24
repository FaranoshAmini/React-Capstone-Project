import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const NavBar = () => (
  <nav>
    <div className="nav-btn">
      <Link to="/" className="btn-link">
        <BiArrowBack />
      </Link>
    </div>
    <div className="logo">
      Crypto
      <span>Coins</span>
    </div>
  </nav>
);

export default NavBar;
