"use client"
import React, { useEffect } from 'react';
import style from  "./styles/SideNav.module.scss";
import Link from 'next/link';


const SideNav = (props) => {
  const Icon = (iconName = "")=> `/assets/icons/${iconName}.svg`
  const navConfig = [
{
  img:Icon("dashboard"),
  name:"dashboard",
  route:"/dashboard"
},
{
  img:Icon("user"),
  name:"user",
  route:"/dashboard/user"
},
  ]

  return (
    <div className={style.sideNavContainer}>
      <div className={style.mini_profile}>
        <img src="/assets/images/avatars/avatar_1.jpg" alt="img" />
        <p>gamil@gmail.com <br />
        <span>prince</span></p>
      </div>
<br />
    
      {
      navConfig.map((e)=>{
        return(
      <Link key={e.route} href={e.route} className={style.linktag} onClick={()=>{props.changeRoute()}}>
      <div className={`${style.route} ${style.activeRoute}`} >
        <img src={e.img} alt="img" />
        <p>{e.name}</p>
      </div>
      </Link>
        )
        })
      }
    </div>
  )
}

export default SideNav