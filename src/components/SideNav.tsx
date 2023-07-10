import React, { Fragment, useContext } from 'react'
import { Avatar, Seperetion, SideNavCont, SideNavLogo, Theme, ThemeWrap } from './styles/sideNav'
import { avatar, ilustration, logo, mainLogo, moon, sun } from '../images'
import { DarkModeContext } from '../contexts'

function SideNav() {
    const {darkMode,setDarkMode} = useContext(DarkModeContext)
  return (
    <SideNavCont>
        <SideNavLogo src={mainLogo}/>
        <ThemeWrap>
            <div onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? (<Theme src={sun} />) : (<Theme src={moon}/>)}
            </div>
            <Seperetion />
            <Avatar src={avatar}/>
        </ThemeWrap>
    </SideNavCont>
  )
}

export default SideNav