import React from 'react'
import Slider from "react-slick";
import { FaStar, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function index({ recipe }) {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        className: "awd",
        useTransform: false,
    };

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="navigator left"
                onClick={onClick}><FaAngleLeft className="mx-auto" /></div>
        );
    }
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="navigator right"
                onClick={onClick}><FaAngleRight className="mx-auto" /></div>
        );
    }
    return (
        <div className="container wrapper carousel">
            <Slider {...settings}>
                {recipe.filter(recipe => recipe.y_kod < 7).map((recipe, index) => {
                    if (index < 5) {
                        return (
                            <div key={index} className="hero-slider">
                                <img className="w-full h-[500px] object-cover" src={`https://www.alerjify.com/images/recipes/${recipe.cuuu}`} alt={recipe.yemek_ad} />
                                <div className="hero-card">
                                    <span className="sub-title"><a href="/">Tatlı</a></span>
                                    <h2 className="title">{recipe.yemek_ad}</h2>
                                    <div className="mb-6">
                                        <ul className="flex mx-auto justify-center text-lg gap-x-1 items-center text-[#d9d9d9]">
                                            <li className="single-item star-empty"><FaStar /></li>
                                            <li className="single-item star-empty"><FaStar /></li>
                                            <li className="single-item star-empty"><FaStar /></li>
                                            <li className="single-item star-empty"><FaStar /></li>
                                            <li className="single-item star-empty"><FaStar /></li>
                                            <li className="text-[#444]"><span>0</span> / 5</li>
                                        </ul>
                                    </div>
                                    <p>Folyo ile çerçeveli bir fırın tepsisini hizalayın. (Kırışıklık olmamasına dikkat edin.)&nbsp;Orta boy bir kapta eritilmiş çikolata ve fı...</p>
                                </div>
                            </div>
                        )
                    } else { return null }
                })}
            </Slider>
        </div>
    )
}

export default index