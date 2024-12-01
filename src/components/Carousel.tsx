import Slider from "react-slick";
import CarouselImage1 from "@/assets/imgs/carousel_1.png";
import CarouselImage2 from "@/assets/imgs/carousel_2.png";
import CarouselImage3 from "@/assets/imgs/carousel_3.png";
import CarouselImage4 from "@/assets/imgs/carousel_4.png";
import CarouselImage5 from "@/assets/imgs/carousel_5.png";
import CarouselImage6 from "@/assets/imgs/carousel_6.png";
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
          <img src={CarouselImage1} alt="" className="h-[500px] w-full object-cover"/>
        </div>
        <div>
          <img src={CarouselImage2} alt=""  className="h-[500px] w-full object-cover"/>
        </div>
        <div>
          <img src={CarouselImage3} alt=""  className="h-[500px] w-full object-cover"/>
        </div>
        <div>
          <img src={CarouselImage4} alt=""  className="h-[500px] w-full object-cover"/>
        </div>
        <div>
          <img src={CarouselImage5} alt=""  className="h-[500px] w-full object-cover"/>
        </div>
        <div>
          <img src={CarouselImage6} alt=""  className="h-[500px] w-full object-cover"/>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
