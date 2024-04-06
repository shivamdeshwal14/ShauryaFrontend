
import './App.css';
import Login from './component/Auths/Login';
import DiscussionFor from './component/DiscussionFor';
import Home from './component/Home';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Privatedata from './component/Auths/Privatedata';
import Vr from './component/Vr';
import Blog from './component/Blog';
import Weapon from './component/Weapons'
import Arsenal from './component/Arsenal';
import Message from './component/Message';


const App=()=>{

 

// return<Login/>
  return <>
<BrowserRouter>

<Routes>
    {/* <Route  exact path='/login' element={<Login/>}></Route> */}
   <Route element={<Privatedata/>}>
  <Route path='/' element={<Home/>}/>
  <Route path='/discussionForm' element={<DiscussionFor/>}/>
  <Route path='/vr' element={<Vr/>}/>
  <Route path='/weapon' element={<Weapon/>}></Route>
  
  <Route path='/blog' element={<Blog/>}></Route>
  <Route path='/arsenal' element={<Arsenal/>}></Route>
  <Route path='/msg' element={<Message/>}></Route>
  </Route>
  <Route path='/login' element={<Login/>}></Route>



 

  </Routes>
  </BrowserRouter>
  </>

  
  
  
  
}
export default App;