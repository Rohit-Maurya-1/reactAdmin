import React, { useEffect, useState } from 'react'
import MainNavbar from '../../MainNavbar'
import "../User/Style.css"
import { GETALLUSER } from '../../services/AuthApi'
import { useParams,useNavigate } from 'react-router-dom'
const UserProfile = () => {
    const navigate = useNavigate()
    const {id}=useParams()
    console.log(id,"iddd");
    const [user,setUser]=useState([])

    useEffect(()=>{
        getUser()
     },[])
     const getUser = async()=>{
      const res = await GETALLUSER(id)
      const data= await res?.data?.body;
      const result= await data.find((item)=>{
         return item._id===id
       })
       setUser(result);
    }
return (
     <>    
            <MainNavbar/>
             <div class="main-content">
              <div class="col-12 col-md-6 col-lg-12">
                <div class="card">
                  <div class="card-header">
                    <h4>InputText</h4>
                  </div>
                  <div class="card-body">
                  <div class="dropdown-item-avatar">
                    <img alt="image" src={`http://localhost:8500/${user?.image}`} class="rounded-circle" width="100px"height="100px"/>
                     </div>
                  <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" value={user?.username}/>
                     </div>
                     <div class="form-group">
                      <label>Email</label>
                      <input type="text" class="form-control" value={user.email}/>
                    </div>
                    <div class="form-group">
                      <label>Phone Number (US Format)</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <div class="input-group-text">
                            <i class="fas fa-phone"></i>
                            <input type="text" class="form-control" value={user.phoneNumber}/>
                          </div>
                        </div>
                        </div>
                      <div class="form-group">
                      <label>Gender</label>
                      <input type="text" class="form-control"/>
                     </div> 
                     <button onClick={()=>navigate("/UserListing")}className='btn-btn Danger'>BACK</button>
                     </div>
                </div>
                </div>
               </div>
             </div>
        </>
     )
}
export default UserProfile