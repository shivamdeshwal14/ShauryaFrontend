import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter,Text } from '@chakra-ui/react'
import Style from "./Home.module.css"
import {Link} from 'react-router-dom';

const Home=()=>{
    
 
 return <div>

<Card className={Style.Card} style={{ background: 'white',borderRadius:'25px'}}>
          <h1>Blog Posts</h1>       
          <p>Following the recent border ambush, the brutal
             reality of combat has once again emerged.
              Our warriors, defenders of sovereignty,
               were confronted with an opponent determined 
               to put our determination to the test.
                Lives were lost, sacrifices were made,
                 and each name was written into history.
                  Despite the pain, there is a glimmer of hope.
                   For each slain comrade, a pledge is renewed:
                    to remain firm, defend, and honor their memory 
                    with unshakable determination. ...   </p>
            

   
    </Card>
    <Card className={Style.Card} style={{ background: 'white',borderRadius:'25px' }}>
          <h1>Excellence Across Landscapes</h1>       
          <p> <strong> Virtual Terrain Training</strong> From Desert Sands to Forest Canopies: Versatile Terrain Training Awaits ...</p>         
       </Card>
      
       <Card className={Style.Card} style={{ background: 'white',borderRadius:'25px' }}>
          <h1>Modernisation of Army Infrastructure</h1>       
          <p>Discover your arsenal's potential with Arsenal Analyzer – your go-to platform for evaluating, upgrading, and optimizing your weaponry with the latest advancements in technology and tactical solutions. </p>         
       </Card>
       <Card className={Style.Card} style={{ background: 'white',borderRadius:'25px' }}>
          <h1>Battlefront Exchange</h1>       
          <p> Welcome to the Battlefront Exchange, where war veterans,
             retired experts as well as serving professionals converge in
              a digital arena to share insights, experiences, and expertise 
              forged on the front lines and valuable defense sectors of improvement.
               Whether you're a seasoned veteran or a keen observer, this platform
                serves as a bastion of camaraderie and collective wisdom, fostering a 
                community dedicated to continual learning and mastery....
        </p>         
       </Card>
 </div>

   
}
export default Home;