// import {currentSlide,showSlides,plusSlides} from "./slideshow.js"
import "./IndexPageCarousel.css";
import slide1 from "../../Images/Index Page Slides/slide1.png";
import slide2 from "../../Images/Index Page Slides/slide2.png";

export const IndexCarousel = () => {
  return (
    <section id="Carousel">
      <div className="carousel">
        <ul className="slides">
          <input type="radio" name="radio-buttons" id="img-1" defaultChecked />
          <li className="slide-container">
            <div className="slide-image">
              <img src={slide1} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-2" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-2" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
          <input type="radio" name="radio-buttons" id="img-2" />
          <li className="slide-container">
            <div className="slide-image">
              <img src={slide2} />
            </div>
            <div className="carousel-controls">
              <label htmlFor="img-1" className="prev-slide">
                <span>&lsaquo;</span>
              </label>
              <label htmlFor="img-1" className="next-slide">
                <span>&rsaquo;</span>
              </label>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
