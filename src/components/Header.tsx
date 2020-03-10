import React from 'react'
import logo from '../images/logo.png'

const Header: React.FC = () => {
  return (
    <div className='Header'>
      <nav>
        <ul>
          <li><a><img src={logo} alt="" className='logo'/></a></li>
          <li><a href="#">ABOUT</a></li>
          <li><a href="#" className='active'>COMMUNITIES</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header;
