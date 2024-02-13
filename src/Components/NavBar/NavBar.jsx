import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import FormControlLabel from '@mui/material/FormControlLabel';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Switch from '@mui/material/Switch';

import './NavBar.css'
export default function NavBar() {
  return (
    <nav className="nav">
        <div className="nav__right">
            <div className="nav__profile">
                <span className='nav__profile-img'>
                    <img src="./img/svg/admin.png" alt="profile img" />
                </span>
                <div  className="nav__profile-name">
                    <h2 className='nav__profile-title'>پارسا وصالی</h2>
                    <h2 className='nav__profile-subtitle'>برنامه نویس وب</h2>
                </div>
                <span className='nav__profile-icon'>
                    <KeyboardArrowDownIcon />
                </span>
            </div>
        </div>
        <div className="nav__left">
            <div className="nav__searchBox">
                <input className='nav__searchBox-input' type="text" placeholder='جستجو کنید...' />
                <img className='nav__searchBox-icon' src="./img/svg/search.png" />
            </div>
          <div className="nav__icons">
          <span className='nav__icon'>
                <SettingsIcon />
            </span>
            <span className='nav__icon nav__notifications'>
                <NotificationsIcon />
            </span>
          </div>
        </div>
    </nav>
  )
}
