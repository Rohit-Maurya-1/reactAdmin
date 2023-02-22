import {Outlet,Navigate} from "react-router-dom";
  
  let auth = localStorage.getItem("Token");
  let authData = localStorage.getItem("Data");
  function PrivateOutlet(){
     return auth || authData ? <Outlet/>:<Navigate to="/"/>;
   }
  export default PrivateOutlet;