import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import MainNavbar from '../../MainNavbar'
import { GETALLUSER } from '../../services/AuthApi'

const UserListing = () => {
  const [userListing,setUserListing]=useState([])
useEffect(()=>{
  getUser()
},[])
const getUser=async()=>{
  const result=  await GETALLUSER()
  setUserListing(result.data.body);
}
return (
   <>
      <MainNavbar/>
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>User</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><Link to="#">Dashboard</Link></div>
              <div class="breadcrumb-item"><Link to="#">Bootstrap Components</Link></div>
              <div class="breadcrumb-item">User</div>
            </div>
          </div>
          <div class="section-body">
            <h2 class="section-title">User</h2>
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                <div class="card">
                <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">SrNo</th>
                          <th scope="col">Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Phone Number</th>
                          <th scope="col">Image</th>
                          <th scope="col">action</th>
                        </tr>
                      </thead>
                      { userListing.map((user,i)=>{
                        return(
                          <tbody>
                          <tr>
                             <th scope="row">{i+1}</th>
                             <td>{user.username}</td>
                             <td>{user.email}</td>
                             <td>{user.phoneNumber}</td>
                             <div class="dropdown-item-avatar">
                              <img alt="image" src={`http://localhost:8500/${user?.image}`} class="rounded-circle" width="45px"height="45px"/>
                           </div>
                         <td> 
                           <Link to={`/UserProfile/${user._id}`} class="btn btn-sm btn-primary"><i class="fa fa-eye"></i></Link>
                         </td>
                           </tr>
                         </tbody>
                       )
                      })
                       }
                      </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  </>
  )
}

export default UserListing