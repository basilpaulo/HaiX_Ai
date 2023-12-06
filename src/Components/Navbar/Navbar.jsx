import React from 'react'
import './Navbar.css'
import logo from '../Assets/HaiX_white.png'
import 'bootstrap/dist/css/bootstrap.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const Navbar = () => {
  return (
    <div>
        <i class="bi bi-bookmark"></i>
         <img className="logo" src={logo} alt='logo'></img>
         <div>{BookmarkBorderIcon}</div>
         <ul className='list'>Favourite Dashboard</ul>
    </div>
  )
}

export default Navbar