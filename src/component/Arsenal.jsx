import '../App.css'
import {Link} from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
const Arsenal=()=>{
    const cd1={
        padding:'5px'
    }
    return(
        <>
        <Navbar/>
            <div style={{marginLeft:"650px"}}><h2>My Arsenals</h2></div>
        <div className='myarsenal'>
          
            <div>
                <div style={{textAlign:'center'}}><h3>MPi-KMS-72		
7.62×39mm East Germany East Germany	
Status:.</h3></div>
            </div>

            <div>
                
            <img style={{width:'450px',height:'180px'}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/IWI-Tavor-TAR-21w1.jpg/1920px-IWI-Tavor-TAR-21w1.jpg" class="card-img-top" alt="..."/>  
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 arsenal">
        <div style={{marginLeft:"650px"}}><h2>Ammunition</h2></div>

  <div class="col">
    <div class="card h-100">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/INSAS_Black.JPG/225px-INSAS_Black.JPG" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Bullpup Assault rifle
5.56×45mm</h5>
        <p class="card-text">India	
St\atus: In Service, manufactured locally by PLR systems.[34]
IMI Tavor TAR-21</p>
      </div>
    </div>
  </div>

  <div class="col">
    <div class="card h-100">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/IWI-Tavor-TAR-21w1.jpg/1920px-IWI-Tavor-TAR-21w1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">1B1 INSAS	
 Assault Rifle	
5.56×45mm	</h5>
        <p class="card-text">India	
Status: In service (To be replaced), Standard assault rifle of the Indian Army. To be replaced by AK-203 and SIG 716i[27]</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/FN_Browning_High_Power_%28left_side%29.png/225px-FN_Browning_High_Power_%28left_side%29.png" class="card-img-top img1" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Pistol Auto 9mm 1A		
Semi-automatic pistol	
9×19mm Parabellum	</h5>
        <p class="card-text">India	
Status: In service, as standard side-arm of the Indian Army, manufactured under license by OFB,</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MPi_KmS_72.jpg/225px-MPi_KmS_72.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">MPi-KMS-72		
7.62×39mm	</h5>
        <p class="card-text">East Germany East Germany	
Status: In service.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/MSG_90_rifle_2014_noBG.jpg/225px-MSG_90_rifle_2014_noBG.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Brügger & Thomet MP9		
Submachine gun	  
	</h5>
        <p class="card-text">Switzerland	
Status: In Service. Small number of MP9s in service.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/M4_Carbine_with_M203_Grenade_Launcher.png/225px-M4_Carbine_with_M203_Grenade_Launcher.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Barrett M82		
Anti-material rifle	
.50 BMG .416 Barrett	  
	</h5>
        <p class="card-text">United States	
Status: In service,used by special forces</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/M4_Carbine_with_M203_Grenade_Launcher.png/225px-M4_Carbine_with_M203_Grenade_Launcher.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Barrett M82		
Anti-material rifle	
.50 BMG .416 Barrett	  
	</h5>
        <p class="card-text">United States	
Status: In service,used by special forces</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/M4_Carbine_with_M203_Grenade_Launcher.png/225px-M4_Carbine_with_M203_Grenade_Launcher.png" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Barrett M82		
Anti-material rifle	
.50 BMG .416 Barrett	  
	</h5>
        <p class="card-text">United States	
Status: In service,used by special forces</p>
      </div>
    </div>
  </div>
 
</div>
    <Footer/>
        </>
    );
}
export default Arsenal;