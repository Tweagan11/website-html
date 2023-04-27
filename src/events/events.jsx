import slide1 from "./speak-bg.jpg"
import slide2 from "./camping-bg.jpg"
import slide3 from "./service.jpg"
import "./carousel.js"


export default function Events() {
    return (
        <div class="container">
        <div id="myCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-bs-target="myCarousel" data-slide-to="0" class="item1 active" aria-current="true" aria-label="Slide 1"></li>
            <li data-target="#myCarousel" data-bs-target="myCarousel" data-slide-to="1" class="item2" aria-label="Slide 2"></li>
            <li data-target="#myCarousel" data-bs-target="myCarousel" data-slide-to="2" class="item3" aria-label="Slide 3"></li>
          </ol>
  
          <div class="carousel-inner" role="listbox">

            <div class="carousel-item active">
              <img class="d-block w-100" src={slide1} alt="Second slide"/>
              <div class="carousel-caption d-none d-md-block">
                <h2>Speaking</h2>
                <p>Our usual events take place either weekly of bi-weekly. Stay posted so you don't miss out on our next event!</p>
              </div>
            </div>

            <div class="carousel-item">
              <img class="d-block w-100" src={slide2} alt="First slide"/>
              <div class="carousel-caption d-none d-md-block">
                <h2>Camping</h2>
                <p>Join friends and future friends as you brace the outdoors! People of all types are welcome and encouraged to come!</p>
              </div>
            </div>
  
            <div class="carousel-item">
              <img class="d-block w-100" src={slide3} alt="Third slide"/>
              <div class="carousel-caption d-none d-md-block">
                <h2>Service</h2>
                <p>We want to give back to the community, and we need your help. Come with us to do what we can for those in need!</p>
              </div>
            </div>
          
          <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
  
        </div>
      </div>
      </div>
    );
}