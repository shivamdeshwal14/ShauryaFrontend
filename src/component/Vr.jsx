import React, { useRef, useEffect } from 'react';
import * as AFRAME from 'aframe';
import Navbar from './Navbar';
import Footer from './Footer';

const Vr = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: true };

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    startCamera();

    // Cleanup
    return () => {
      if (videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div >
     <Navbar/>
      <form>
        {/* Your sign-up form fields */}
      </form>

      <div className="abc"><h2>VR Experience</h2></div>
      <div className="cdf">
      <a-scene embedded>
        {/* Camera feed */}
        <a-entity camera></a-entity>
        <a-video src="#cameraFeed" width="16" height="9" position="0 1.5 -3" scale="0.65 0.65 1" material="shader: standard; src: #cameraFeed; color: #FFFFFF; transparent: true; opacity: 0.6;"></a-video>
        <a-entity
          geometry="primitive: plane; width: 100; height: 100;"
          material="shader: standard; src: #forestTexture; repeat: 100 100; color: #FFFFFF; transparent: true; opacity: 0.3;">
        </a-entity>
      </a-scene>
      </div>
      <video ref={videoRef} id="cameraFeed" style={{ display: 'none' }} autoPlay playsInline />
      <img id="forestTexture" src="/forest_texture.jpg" style={{ display: 'none' }} />
      <div className='video'>
      <iframe width="720" height="515" src="https://www.youtube.com/embed/IBoGKaGpsrM?autoplay=1" frameborder="0" allowfullscreen></iframe>


</div>
      <Footer/>
    </div>
  );
};

export default Vr;