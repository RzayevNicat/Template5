import React, { Component } from "react";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,

            initialSlide: 2
        };
        return (
            <div className="car">
                <Slider {...settings}>
                    <div className="carousel">
                        <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
                        <h1>Get your <span>Education</span> Today</h1>
                    </div>
                    <div className="carousel">
                        <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
                        <h1>Get your <span>Education</span> Today</h1>
                    </div>
                    <div className="carousel">
                        <img src="https://preview.colorlib.com/theme/course/images/slider_background.jpg.webp" />
                        <h1>Get your <span>Education</span> Today</h1>
                    </div>
                </Slider>
            </div>
        );
    }
}
