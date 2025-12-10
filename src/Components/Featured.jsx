import React from 'react'
import "../Styles/featured.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Featured = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,

        responsive: [
            {
                breakpoint: 1024,   // tablet
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,    // mobile
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };



    return (
        <div className='freatured-screen pt-3'>
            <h3>Featured</h3>
            <p>Recognized and celebrated by leading publications – Amrutam in the spotlight!</p>

            <div className="container mx-auto pt-5 pb-5">
                <Slider {...settings}>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img1.png" alt="featured-img" className='featured-img' />
                    </div>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img2.png" alt="featured-img" className='featured-img' />
                    </div>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img3.png" alt="featured-img" className='featured-img' />
                    </div>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img4.png" alt="featured-img" className='featured-img' />
                    </div>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img5.png" alt="featured-img" className='featured-img' />
                    </div>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img6.png" alt="featured-img" className='featured-img' />
                    </div>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img7.png" alt="featured-img" className='featured-img' />
                    </div>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img8.png" alt="featured-img" className='featured-img' />
                    </div>
                    <div className='featured-slide'>
                        <img src="../Assets/featured-img9.png" alt="featured-img" className='featured-img' />
                    </div>

                </Slider>
            </div>
        </div>
    )
}

export default Featured