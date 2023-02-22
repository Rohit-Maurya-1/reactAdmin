import React,{useEffect, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import MainNavbar from '../../MainNavbar'
import {ADDMATERIAL} from "../../services/AuthApi"

 const AddMaterial = () => {
  const navigate= useNavigate()
//   const [getData, setGetData]=useState([])


 const [values,setValues]=useState({
    materialName:""
   })
const handleChange=(e)=>{
    const {name,value}=e.target
    setValues({
      ...values,
      [name]:value
    })
}
const handleSubmit= async(e)=>{
       e.preventDefault()
      const res= await ADDMATERIAL(values)
      navigate("/Material")
      console.log(res,"ressssss");
    
    }
return (
    <>
    <MainNavbar/>
    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>Add Material</h1>
          <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><Link to="#">Dashboard</Link></div>
            <div class="breadcrumb-item"><Link to="#">Bootstrap Components</Link></div>
          </div>
        </div>
        <div class="section-body">
        <div class="row">
            <div class="col-12 col-md-12 col-lg-12">
              <div class="card">
              <div class="card-body">
              <form onSubmit={handleSubmit}>
              <div class="card-body">
                <div class="form-group">
                  <label>Material Name</label>
                  <input type="text" name="materialName" class="form-control"onChange={handleChange} />
                 </div>

                <button  type='submit'class="btn btn-primary submit_btns" >ADD</button>
              </div>
            </form>
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



export default AddMaterial