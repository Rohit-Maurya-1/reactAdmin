import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const MainNavbar = () => {
  return(
    <>
    <div id="app">
    <div class="main-wrapper">
    <div class="navbar-bg"></div>
     <Navbar/>
     <Sidebar/>
    </div>
    </div>
    </>
  )
}
 export default MainNavbar