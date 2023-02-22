import React from 'react'
import{Link}from "react-router-dom"

const Sidebar = () => {
  return (
   <>
    <div class="main-sidebar">
        <aside id="sidebar-wrapper">
          <div class="sidebar-brand">
            <Link to="index.html">Stisla</Link>
          </div>
          <div class="sidebar-brand sidebar-brand-sm">
            <Link to="index.html">St</Link>
          </div>
          <ul class="sidebar-menu">
              <li class="menu-header">Dashboard</li>
              <li class="menu-header">Starter</li>
               <li><Link class="nav-link" to="/dashboard"><i class="far fa-square"></i> <span>Dashboard</span></Link></li>
              <li class="nav-item dropdown">
            </li>
              <li class="menu-header">Stisla</li>
             <Link to="/UserListing" class="nav-link has-dropdown"><i class="far fa-file-alt"></i> <span>User</span></Link>
             <Link to="/UserListing" class="nav-link has-dropdown"><i class="far fa-file-alt"></i> <span>Cariar</span></Link>
             <Link to="/Material" class="nav-link has-dropdown"><i class="far fa-file-alt"></i> <span>Material</span></Link>
             <li class="menu-header">Pages</li>
              <li class="nav-item dropdown">
                <Link to="#" class="nav-link has-dropdown"><i class="far fa-user"></i> <span>Auth</span></Link>
                <ul class="dropdown-menu">
                  <li><Link to="forgotPassword">Forgot Password</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link class="beep beep-sidebar" to="auth-login-2.html">Login 2</Link></li>
                  <li><Link to="UserRegister">Register</Link></li>
                  <li><Link to="ResetPassword">Reset Password</Link></li>
                </ul>
              </li>
               <li class="nav-item dropdown">
                <Link to="#" class="nav-link has-dropdown"><i class="fas fa-bicycle"></i> <span>Features</span></Link>
                <ul class="dropdown-menu">
                  <li><Link class="nav-link" to="features-activities.html">Activities</Link></li>
                  <li><Link class="nav-link" to="features-post-create.html">Post Create</Link></li>
                  <li><Link class="nav-link" to="features-posts.html">Posts</Link></li>
                  <li><Link class="nav-link" to="features-profile.html">Profile</Link></li>
                  <li><Link class="nav-link" to="features-settings.html">Settings</Link></li>
                  <li><Link class="nav-link" to="features-setting-detail.html">Setting Detail</Link></li>
                  <li><Link class="nav-link" to="features-tickets.html">Tickets</Link></li>
                </ul>
              </li>
             
              <li><Link class="nav-link" to="credits.html"><i class="fas fa-pencil-ruler"></i> <span>Credits</span></Link></li>
            </ul>

            <div class="mt-4 mb-4 p-3 hide-sidebar-mini">
              <Link to="https://getstisla.com/docs" class="btn btn-primary btn-lg btn-block btn-icon-split">
                <i class="fas fa-rocket"></i> Documentation
              </Link>
            </div>
        </aside>
      </div>
   </>
  )
}

export default Sidebar