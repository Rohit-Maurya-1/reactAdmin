import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './component/Login';
import PrivateOutlet from './services/AuthToken';
import MainContent from './MainContent';
import UserListing from './component/User/UserListing';
import UserProfile from './component/User/UserProfile';
import Material from './component/Material/Material';
import MaterialUpdate from './component/Material/MaterialUpdate';
import AddMaterial from './component/Material/AddMaterial';

function App(){
  return(
   <>
  <Routes>
   <Route path="/" element={<Login/>}/>
   <Route element={<PrivateOutlet/>}>
   <Route path='/dashboard' element={<MainContent/>}/>
   <Route path='UserListing' element={<UserListing/>}/>
   <Route path='AddMaterial' element={<AddMaterial/>}/>
   <Route path='UserProfile/:id' element={<UserProfile/>}/>
   <Route path='/Material' element={<Material/>}/>
   <Route path='/MaterialUpdate/:id' element={<MaterialUpdate/>}/>
   </Route>
   </Routes>
   </>
  );
}
export default App;
