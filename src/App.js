
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
const App=()=>{


  return <div>
    <div style={{position:'sticky', zIndex:'1', marginBottom:'5px' }}>
    <Navbar/>
    </div>
  

<Home/>
  </div>
  
  
  
  
}
export default App;