"use client"
import React, { useRef, useState } from 'react'
import style from "./Layout.module.scss"
import SideNav from '@/DashbordComponent/SideNav'
import MenuIcon from '@mui/icons-material/ClearAll';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const layout = ({ children }) => {
  const [togglenav, settogglenav] = useState(style.navToggle)
  const menuHandle = () => {
    {togglenav == null ? settogglenav(style.navToggle) : settogglenav(null)}
  }
  const Icon = (iconName = "")=> `/assets/images/avatars/${iconName}.jpg`
  
  return (
    <div>
      <nav className={style.navTop}>
        <div className={style.menu_logo}>
          <MenuIcon onClick={() => menuHandle()}/>
          <img src="/logo_mini.png" alt="jicro" style={{display:"none"}} />
          <img src="/logo_mini.png" alt="jicro" />
          <h1>Dashboard</h1>
        </div>
        <div className={style.notify_profile}>
          <div className={style.notify}>
            <p>23</p>
          <NotificationsIcon/>
          </div>

          <div className={style.profile_more}>
          <img src={Icon("avatar_1")}alt="img" />
          <div className={style.profile_options}>
            <div className={style.admin_info}>
              <h1>gmail@gmail.com</h1>
              <p>name goes here</p>
            </div>
            <hr />
            <li><SettingsIcon/> setting</li>
            <li><SettingsIcon/> setting</li>
            <hr />
            <li><LogoutIcon/> logout</li>
          </div>
        </div>
          </div>
      </nav>
      <main className={style.mainContainer}>

        <section className={`${style.sideNav} ${togglenav}`}>
          <SideNav /> 
          </section>

        <section className={style.childLayout} >
          {children}
        </section>
      </main>
    </div>
  )
}

export default layout