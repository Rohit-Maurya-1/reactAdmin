import React, {useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom';

const Navbar = () => {
  const[data,setData] = useState("")
  const navigate = useNavigate()
   let token = localStorage.getItem("Token");
   let Data = localStorage.getItem("Data");
   const handleLogout=(e)=>{
     if(token){
      localStorage.clear(token)
      localStorage.clear(Data)
      // navigate("/")
    }else{
     }
  }
    useEffect(()=>{
    let Data=localStorage.getItem("Data")
    setData(JSON.parse(Data))
  },[])
 //========================================getData==========================================================
   return (
    <>
      <nav class="navbar navbar-expand-lg main-navbar">
        <form class="form-inline mr-auto">
          <ul class="navbar-nav mr-3">
            <li><Link to="#" data-toggle="sidebar" class="nav-link nav-link-lg"><i class="fas fa-bars"></i></Link></li>
            <li><Link to="#" data-toggle="search" class="nav-link nav-link-lg d-sm-none"><i class="fas fa-search"></i></Link></li>
          </ul>
          <div class="search-element">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" data-width="250"/>
            <button class="btn" type="submit"><i class="fas fa-search"></i></button>
            <div class="search-backdrop"></div>
            <div class="search-result">
              <div class="search-header">
                Histories
              </div>
              <div class="search-item">
                <Link to="#">How to hack NASA using CSS</Link>
                <Link to="#" class="search-close"><i class="fas fa-times"></i></Link>
              </div>
              <div class="search-item">
                <Link to="#">Kodinger.com</Link>
                <Link to="#" class="search-close"><i class="fas fa-times"></i></Link>
              </div>
              <div class="search-item">
                <Link to="#">#Stisla</Link>
                <Link to="#" class="search-close"><i class="fas fa-times"></i></Link>
              </div>
              <div class="search-header">
                Result
              </div>
              <div class="search-item">
                <Link to="#">
                  <img class="mr-3 rounded" width="30" src="../assets/img/products/product-3-50.png" alt="product"/>
                  oPhone S9 Limited Edition
                </Link>
              </div>
              <div class="search-item">
                <Link to="#">
                  <img class="mr-3 rounded" width="30" src="../assets/img/products/product-2-50.png" alt="product"/>
                  Drone X2 New Gen-7
                </Link>
              </div>
              <div class="search-item">
                <Link to="#">
                  <img class="mr-3 rounded" width="30" src="../assets/img/products/product-1-50.png" alt="product"/>
                  Headphone Blitz
                </Link>
              </div>
              <div class="search-header">
                Projects
              </div>
              <div class="search-item">
                <Link to="#">
                  <div class="search-icon bg-danger text-white mr-3">
                    <i class="fas fa-code"></i>
                  </div>
                  Stisla Admin Template
                </Link>
              </div>
              <div class="search-item">
                <Link to="#">
                  <div class="search-icon bg-primary text-white mr-3">
                    <i class="fas fa-laptop"></i>
                  </div>
                  Create a new Homepage Design
                </Link>
              </div>
            </div>
          </div>
        </form>
        <ul class="navbar-nav navbar-right">
          <li class="dropdown dropdown-list-toggle"><Link to="#" data-toggle="dropdown" class="nav-link nav-link-lg message-toggle beep"><i class="far fa-envelope"></i></Link>
            <div class="dropdown-menu dropdown-list dropdown-menu-right">
              <div class="dropdown-header">Messages
                <div class="float-right">
                  <Link to="#">Mark All As Read</Link>
                </div>
              </div>
              <div class="dropdown-list-content dropdown-list-message">
                <Link to="#" class="dropdown-item dropdown-item-unread">
                  <div class="dropdown-item-avatar">
                    <img alt="image" src="../assets/img/avatar/avatar-1.png" class="rounded-circle"/>
                    <div class="is-online"></div>
                  </div>
                  <div class="dropdown-item-desc">
                    <b>Kusnaedi</b>
                    <p>Hello, Bro!</p>
                    <div class="time">10 Hours Ago</div>
                  </div>
                </Link>
                <Link to="#" class="dropdown-item dropdown-item-unread">
                  <div class="dropdown-item-avatar">
                    <img alt="image" src="../assets/img/avatar/avatar-2.png" class="rounded-circle"/>
                  </div>
                  <div class="dropdown-item-desc">
                    <b>Dedik Sugiharto</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                    <div class="time">12 Hours Ago</div>
                  </div>
                </Link>
                <Link to="#" class="dropdown-item dropdown-item-unread">
                  <div class="dropdown-item-avatar">
                    <img alt="image" src="../assets/img/avatar/avatar-3.png" class="rounded-circle"/>
                    <div class="is-online"></div>
                  </div>
                  <div class="dropdown-item-desc">
                    <b>Agung Ardiansyah</b>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div class="time">12 Hours Ago</div>
                  </div>
                </Link>
                <Link to="#" class="dropdown-item">
                  <div class="dropdown-item-avatar">
                    <img alt="image" src="../assets/img/avatar/avatar-4.png" class="rounded-circle"/>
                  </div>
                  <div class="dropdown-item-desc">
                    <b>Ardian Rahardiansyah</b>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit ess</p>
                    <div class="time">16 Hours Ago</div>
                  </div>
                </Link>
                <Link to="#" class="dropdown-item">
                  <div class="dropdown-item-avatar">
                    <img alt="image" src="../assets/img/avatar/avatar-5.png" class="rounded-circle"/>
                  </div>
                  <div class="dropdown-item-desc">
                    <b>Alfa Zulkarnain</b>
                    <p>Exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                    <div class="time">Yesterday</div>
                  </div>
                </Link>
              </div>
              <div class="dropdown-footer text-center">
                <Link to="#">View All <i class="fas fa-chevron-right"></i></Link>
              </div>
            </div>
          </li>
          <li class="dropdown dropdown-list-toggle"><Link to="#" data-toggle="dropdown" class="nav-link notification-toggle nav-link-lg beep"><i class="far fa-bell"></i></Link>
            <div class="dropdown-menu dropdown-list dropdown-menu-right">
              <div class="dropdown-header">Notifications
                <div class="float-right">
                  <Link to="#">Mark All As Read</Link>
                </div>
              </div>
              <div class="dropdown-list-content dropdown-list-icons">
                <Link to="#" class="dropdown-item dropdown-item-unread">
                  <div class="dropdown-item-icon bg-primary text-white">
                    <i class="fas fa-code"></i>
                  </div>
                  <div class="dropdown-item-desc">
                    Template update is available now!
                    <div class="time text-primary">2 Min Ago</div>
                  </div>
                </Link>
                <Link to="#" class="dropdown-item">
                  <div class="dropdown-item-icon bg-info text-white">
                    <i class="far fa-user"></i>
                  </div>
                  <div class="dropdown-item-desc">
                    <b>You</b> and <b>Dedik Sugiharto</b> are now friends
                    <div class="time">10 Hours Ago</div>
                  </div>
                </Link>
                <Link to="#" class="dropdown-item">
                  <div class="dropdown-item-icon bg-success text-white">
                    <i class="fas fa-check"></i>
                  </div>
                  <div class="dropdown-item-desc">
                    <b>Kusnaedi</b> has moved task <b>Fix bug header</b> to <b>Done</b>
                    <div class="time">12 Hours Ago</div>
                  </div>
                </Link>
                <Link to="#" class="dropdown-item">
                  <div class="dropdown-item-icon bg-danger text-white">
                    <i class="fas fa-exclamation-triangle"></i>
                  </div>
                  <div class="dropdown-item-desc">
                    Low disk space. Let's clean it!
                    <div class="time">17 Hours Ago</div>
                  </div>
                </Link>
                <Link to="#" class="dropdown-item">
                  <div class="dropdown-item-icon bg-info text-white">
                    <i class="fas fa-bell"></i>
                  </div>
                  <div class="dropdown-item-desc">
                    Welcome to Stisla template!
                    <div class="time">Yesterday</div>
                  </div>
                </Link>
              </div>
              <div class="dropdown-footer text-center">
                <Link to="#">View All <i class="fas fa-chevron-right"></i></Link>
              </div>
            </div>
          </li>
           <li class="dropdown"><Link to="#" data-toggle="dropdown" class="nav-link dropdown-toggle nav-link-lg nav-link-user">
            <img alt="image" src={`http://localhost:8500/${data?.image}`} class="rounded-circle mr-1"/>
            <div class="d-sm-none d-lg-inline-block">{data?.username}</div></Link>
            <div class="dropdown-menu dropdown-menu-right">
              <div class="dropdown-title">Logged in 5 min ago</div>
              <Link to="UpdateProfile" class="dropdown-item has-icon">
                <i class="far fa-user"></i> Profile
              </Link>
              <Link to="features-activities.html" class="dropdown-item has-icon">
                <i class="fas fa-bolt"></i> Activities
              </Link>
              <Link to="features-settings.html" class="dropdown-item has-icon">
                <i class="fas fa-cog"></i> Settings
              </Link>
              <div class="dropdown-divider"></div>
              <Link to="/" class="dropdown-item has-icon text-danger" onClick={handleLogout} >
                <i class="fas fa-sign-out-alt"></i> Logout
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </>
  )
}
export default Navbar;