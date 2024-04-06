import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup ,Card,CardBody,Image,Stack,Heading,Text,Divider,CardFooter} from '@chakra-ui/react'
 <Link to="blogs">Go to blogs</Link>
const Services=()=>{
    const cd1={
        padding:'5px'
    }
    return (
        <>
        
        <div className='servicebox'>
          <h1 className='serviceheading'>Services for Sainik</h1>
        


          



          <div className='Maincard'>

        



          <div class="col card1">
              <div class="card cardlist1 s1" >

                <img style={{ height: '350px', width: '100%' }} src="https://i.pinimg.com/564x/9d/80/39/9d8039ddf6338de4f794b732e4fa905a.jpg" class="card-img-top " alt="drive image" />
                              
                <div class="card-body">
                <h4>Blog Post</h4>
                  </div>
                  <p style={cd1} >soldier's unwritten code: endure, persevere, and never flinch in the face of danger.</p>
                  <Button class="btn1"><Link to="blog" style={{color:'black', textDecoration:'none'}}>Go to blogs</Link></Button>
                  
   

                 
              </div>

            </div >
            <div class="col card1">
              <div class="card cardlist1 s1" >

                <img style={{ height: '350px', width: '100%' }} src="https://wallpapercave.com/wp/wp8546888.jpg" class="card-img-top " alt="drive image" />
               
                
                <div class="card-body">
                <h4>Battlefront Exchange</h4>
                  </div>
                  <p style={cd1}>Welcome to the Battlefront Exchange, where war veterans, ..... </p>
                  <Button class="btn1"><Link to="msg" style={{color:'black', textDecoration:'none'}}>Message</Link></Button>
              </div>

            </div >
          <div class="col card1">
              <div class="card cardlist1 s1" >

                <img style={{ height: '350px', width: '100%' }} src="https://i.pinimg.com/564x/fa/89/cd/fa89cd923849034a933c409a2f6aa8b1.jpg" class="card-img-top " alt="drive image" />
               
                
                <div class="card-body">
                <h4>Arsenal Analyzer</h4>
                  </div>
                  <p style={cd1}>Discover your arsenal's potential with Arsenal Analyzer – your go-to... </p>
                  <Button class="btn1"><Link to="/arsenal" style={{color:'black', textDecoration:'none'}}>Analyzer</Link></Button>
              </div>

            </div >
            
          <div class="col card1">
              <div class="card cardlist1 s1" >

                <img style={{ height: '350px', width: '100%' }} src="https://i.pinimg.com/564x/f4/c4/cc/f4c4ccb5a2d1bb965c314cfc078f14c2.jpg" class="card-img-top " alt="drive image" />
               
                
                <div class="card-body">
                <h4>Terrain Traning</h4>
               
                  </div>
                  <p style={cd1}>
                From Desert Sands to Forest Canopies: Versatile Terrain Training Awaits
                </p>
                <Button class="btn1"><Link to="vr" style={{color:'black', textDecoration:'none'}}>Traning</Link></Button>
              </div>

            </div >
            </div>
        </div>
        </>
    );
}

export default Services;