import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import {Link,useNavigate} from "react-router-dom"
import MainNavbar from '../../MainNavbar'
import { GETALLMATERIAL,DELETEMATERIAL} from '../../services/AuthApi'

const Material = () =>{
  const navigate= useNavigate()
  const [userListing,setUserListing]=useState([])

useEffect(()=>{
  getUser()
},[])
const getUser=async()=>{
  const result = await GETALLMATERIAL()
  setUserListing(result.data.body);
  }
//==========================deleteData======================================
 const handleDelete = async(id)=>{
  const result = userListing.filter((data)=>{
      return  data._id!==id
  });
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'delete'
  }).then((res) => {
    if(res.isConfirmed){
      let res = DELETEMATERIAL(id)
      Swal.fire(
          setUserListing(result),
         'Your file has been deleted.',
         'success'
        )
       }
  })
}
 return (
   <>
      <MainNavbar/>
      <div class="main-content">
        <section class="section">
          <div class="section-header">
            <h1>Material List</h1>
            <div class="section-header-breadcrumb">
              <div class="breadcrumb-item active"><Link to="#">Dashboard</Link></div>
              <div class="breadcrumb-item"><Link to="#">Bootstrap Components</Link></div>
             
            </div>
          </div>
          <div class="section-body">
           <button onClick={()=>navigate("/AddMaterial")}>add</button>
            <div class="row">
              <div class="col-12 col-md-12 col-lg-12">
                <div class="card">
                <div class="card-body">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">SrNo</th>
                          <th scope="col">Material Name</th>
                          <th scope="col">Action</th>
                        
                        </tr>
                      </thead>
                      { userListing.map((user,i)=>{
                        return(
                          <tbody>
                          <tr>
                             <th scope="row">{i+1}</th>
                             <td>{user.materialName}</td>
                             <button class="btn btn-sm btn-primary mr-2" onClick={()=>navigate(`/MaterialUpdate/${user._id}`)}><i class="fa fa-edit"></i></button>
                           <button  onClick={()=>handleDelete(user._id)}
                           class="btn btn-sm btn-danger deletdat>"><i class="fa fa-trash"></i></button>
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
export default Material