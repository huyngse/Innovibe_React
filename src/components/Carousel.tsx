import Slider from "react-slick";
import CarouselImage from "@/assets/imgs/carousel_1.png";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings} >
        <div>
          <img src={CarouselImage} alt="" className="h-[500px] w-full object-cover"/>
        </div>
        <div>
          <img src={CarouselImage} alt=""  className="h-[500px] w-full object-cover"/>
        </div>
        <div>
          <img src={CarouselImage} alt=""  className="h-[500px] w-full object-cover"/>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
