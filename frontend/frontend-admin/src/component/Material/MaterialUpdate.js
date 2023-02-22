import React,{useEffect, useState} from 'react'
import { Link,useParams,useNavigate } from 'react-router-dom'
import MainNavbar from '../../MainNavbar'
import {GETALLMATERIAL,UPDATEMATERIAL} from "../../services/AuthApi"

 const MaterialUpdate = () => {
  const navigate= useNavigate()
  const [getData, setGetData]=useState([])
  const {id}=useParams()

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
  useEffect(()=>{
    setValues({materialName:getData.materialName})
 },[])


const handleSubmit= async(e)=>{
       e.preventDefault()
       const res= await UPDATEMATERIAL(id,values)
       console.log(res,"updated");
       setGetData(res)
       navigate("/Material")
    }
 useEffect(()=>{
      getUser()
    },[])
    const getUser=async()=>{
      const result = await GETALLMATERIAL(id)
      const res= await result.data.body
      const data= await res.find((item)=>{
         return item._id===id
      })
      setGetData(data);
    }
 return (
    <>
    <MainNavbar/>
    <div class="main-content">
      <section class="section">
        <div class="section-header">
          <h1>Edit Material</h1>
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
                  <input type="text" name="materialName" defaultValue={getData?.materialName}  class="form-control"onChange={handleChange} />
                 </div>

                <button  type='submit'class="btn btn-primary submit_btns">Update</button>
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



export default MaterialUpdate