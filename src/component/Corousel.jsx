const Corousel=()=>{
    return(
        <>
             <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel" >
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
   
  </div>
  <div class="carousel-inner " style={{height:'600px'}}> 
    <div class="carousel-item active" data-bs-interval="2000"  >
      <img src='https://images.unsplash.com/photo-1586083944757-6fa33fdfd9c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'class="d-block w-100 carousel-img " alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
   
    <div class="carousel-item" data-bs-interval="2000" >
      <img src='https://media.istockphoto.com/id/1320863387/photo/indian-army.jpg?s=2048x2048&w=is&k=20&c=UEGe0wFQdr_oLWdp4GkId-Il7oXAIVidnwW2N6IDvi4=' class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src='https://www.thedefensepost.com/wp-content/uploads/2022/04/original-3-2048x1367.jpg' class="d-block w-100 carousel-img" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
       
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div>
        
        </>

    );
}
export default Corousel;