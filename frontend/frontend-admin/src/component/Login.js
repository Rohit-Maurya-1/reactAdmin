import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from"react-router-dom"
import { LOGIN }from'../services/AuthApi'
const Login = () => {
  const navigate= useNavigate()
 const[values,setValues]=useState({
  email:"",
  password:""
 })
  const handleChange=(e)=>{
  const {name,value}=e.target
  setValues({
    ...values,
    [name]:value
  })
 }
 const handleSubmit= async(e)=>{
  try {
     e.preventDefault()
      const res= await LOGIN(values)
        if(res?.data?.success===true){
          localStorage.setItem("Token",res?.data?.body?.token)
          localStorage.setItem("Data",JSON.stringify(res?.data?.body))
          navigate("/dashboard")
      }
         else if(res?.data?.status===201){
         toast.error("!invalid username or password")
        }
      }catch (error){
       toast.error("internal server error")
   }
 }
return (
  <>
  <div id="app">
    <section class="section">
      <div class="container mt-5">
        <div class="row">
          <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div class="login-brand">
              <img src="../assets/img/stisla-fill.svg" alt="logo" width="100" class="shadow-light rounded-circle"/>
            </div>
            <div class="card card-primary">
              <div class="card-header"><h4>Login</h4></div>
              <div class="card-body">
                <form  class="needs-validation" novalidate="" onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="email" class="form-control" name="email" tabindex="1" required autofocus onChange={handleChange}/>
                    <div class="invalid-feedback">
                      Please fill in your email
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="d-block">
                    	<label for="password" class="control-label">Password</label>
                      <div class="float-right">
                        <Link to="auth-forgot-password.html" class="text-small">
                          ForgotPassword?
                        </Link>
                      </div>
                    </div>
                    <input id="password" type="password" class="form-control" name="password" tabindex="2"required onChange={handleChange}/>
                    <div class="invalid-feedback">
                         please fill in your password
                    </div>
                  </div>
                 <div class="form-group">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember-me"/>
                      <label class="custom-control-label" for="remember-me">Remember Me</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block" tabindex="4">
                      Login
                    </button>
                  </div>
                </form>
                <div class="text-center mt-4 mb-3">
                  <div class="text-job text-muted">Login With Social</div>
                </div>
                <div class="row sm-gutters">
                  <div class="col-6">
                    <Link class="btn btn-block btn-social btn-facebook">
                      <span class="fab fa-facebook"></span> Facebook
                    </Link>
                  </div>
                  <div class="col-6">
                    <Link class="btn btn-block btn-social btn-twitter">
                      <span class="fab fa-twitter"></span> Twitter
                    </Link>
                  </div>
                </div>
               </div>
            </div>
            <div class="mt-5 text-muted text-center">
              Don't have an account? <Link to="auth-register.html">Create One</Link>
            </div>
            <div class="simple-footer">
              Copyright &copy; Stisla 2018
            </div>
          </div>
        </div>
      </div>
  
    </section>
    <ToastContainer/>
  </div>
    </>
  )
}

export default Login