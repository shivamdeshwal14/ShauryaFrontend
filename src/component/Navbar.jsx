import '../App.css'
import React from 'react';
import {Link} from 'react-router-dom';
const Navbar=()=>{
    return (
        <>
       
   

<div class="navbar" >
  
    <div className='navtitle'>SHAURYA   <span style={{color:'white', marginLeft:'10px',fontWeight:'bolder'}}>   Sena</span></div>
    <div className='navtext' href="#" ><Link to="/" style={{textDecoration:'none',color:'white'}}>Home</Link></div>
    <div  className='navtext' href="#"><Link to="/discussionForm" style={{textDecoration:'none',color:'white'}}>Discussion Form</Link></div>
    <div className='navtext' href="#"><Link to='/vr' style={{textDecoration:'none',color:'white'}}>VR</Link></div>
    <div className='navtext' href="#"><Link to='/weapon' style={{textDecoration:'none',color:'white'}}>Weapons</Link></div>
    <div className='navtext' href="#"><Link to='/login' style={{textDecoration:'none',color:'white'}}>Login</Link><i class="fa fa-user"></i></div>
    <div className='navtext' href="#"><i class="fa fa-shopping-cart"></i></div>
</div>





        </>
    );
}
export default Navbar;