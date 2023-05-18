import Slider from "react-slick";
import "./carousel.css";


export default function Carousel({ children }) {
    
    
        const settings = {
          dots: false,
          infinite: true,
          speed: 400,
          centerMode: false,
          variableWidth: true,
          adaptativeHeight: true,
          slidesToShow: 3,
          slidesToScroll: 1
        };
    
    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}