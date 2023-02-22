import axios from "axios";
export const BASE_URL= 'http://localhost:8500/'

export const REGISTER= async(values)=>{
  const BASE_URL='http://localhost:8500/' 
  const url= BASE_URL+'adminRegister'
  const res= await axios.post(url,values)
  return res
 }
 
export const LOGIN= async(values)=>{
    const BASE_URL='http://localhost:8500/' 
    const url= BASE_URL+'adminlogin'
    const res=  await axios.post(url,values)
    try {
     return res
     } catch (error){
       return error
    }
  }
  //========================================================userModel=======================================
export const GETALLUSER = async()=>{
    const BASE_URL='http://localhost:8500/' 
    const url= BASE_URL+'getUserData'
    const res= await axios.get(url)
    try {
       return res
     } catch (error){
       return error
    }
  }
export const DELETEDATA= async(id)=>{
    const BASE_URL='http://localhost:8000/' 
    const url= BASE_URL+`userDelete/${id}`
    const res= await axios.delete(url)
    try{
       return res
     } catch (error){
       return error
    }
  }
export const UPDATEUSER= async(id,values)=>{
   const BASE_URL='http://localhost:8000/' 
   const url= BASE_URL+`userUpdate/${id}`
   const res= await axios.patch(url,values)
    try {
     return res
     } catch(error){
         return error
    }
  }
//===========================material data===============================
export const ADDMATERIAL = async(values)=>{
    const BASE_URL='http://localhost:8500/' 
    const url= BASE_URL+'addMaterial'
    const res= await axios.post(url,values)
    try {
       return res
     } catch (error){
       return error
    }
  }

 export const GETALLMATERIAL = async()=>{
    const BASE_URL='http://localhost:8500/' 
    const url= BASE_URL+'getMaterial'
    const res= await axios.get(url)
    try {
       return res
     } catch (error){
       return error
    }
  }
   
  export const DELETEMATERIAL = async(id)=>{
    const BASE_URL='http://localhost:8500/' 
    const url= BASE_URL+`DeleteMaterial/${id}`
    const res= await axios.delete(url)
    try {
       return res
     } catch (error){
       return error
    }
  }
  
export const UPDATEMATERIAL = async(id,values)=>{
    const BASE_URL='http://localhost:8500/' 
    const url= BASE_URL+`UpdateMaterial/${id}`
    const res= await axios.put(url,values)
    try {
       return res
     } catch (error){
       return error
    }
  }