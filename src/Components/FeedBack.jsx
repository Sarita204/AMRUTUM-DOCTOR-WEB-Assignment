import React from 'react'
import "../Styles/feddback.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card } from 'react-bootstrap';


const FeedBack = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
            }
        ]
    };



    return (
        <div className='feedback-section pb-5'>
            <h3>What other Ayurvedic Doctors are Saying</h3>
            <p>Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!</p>


            <div className="container mx-auto mt-4 pb-3">
                <Slider {...settings}>
                    <div className='feedback-slide'>
                        <Card className='feedback-slide-card'>
                            <Card.Body>
                                <div className='slide-header-section'>
                                    <div>
                                        <img src="../Assets/Reveiw-img.jpg" alt="review-img" className='review-img' />
                                    </div>
                                    <div className='review-heading'>
                                        <h6>
                                            <b>Dr. Pooja Deshmukh,</b> BAMS
                                        </h6>
                                        <span>
                                            <img src="../Assets/star.png" alt="star" className='star-img' />
                                        </span>
                                    </div>
                                </div>
                                <div className='review-content'>
                                    "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='feedback-slide'>
                        <Card className='feedback-slide-card'>
                            <Card.Body>
                                <div className='slide-header-section'>
                                    <div>
                                        <img src="../Assets/Reveiw-img.jpg" alt="review-img" className='review-img' />
                                    </div>
                                    <div className='review-heading'>
                                        <h6>
                                            <b>Dr. Pooja Deshmukh,</b> BAMS
                                        </h6>
                                        <span>
                                            <img src="../Assets/star.png" alt="star" className='star-img' />
                                        </span>
                                    </div>
                                </div>
                                <div className='review-content'>
                                    "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='feedback-slide'>
                        <Card className='feedback-slide-card'>
                            <Card.Body>
                                <div className='slide-header-section'>
                                    <div>
                                        <img src="../Assets/Reveiw-img.jpg" alt="review-img" className='review-img' />
                                    </div>
                                    <div className='review-heading'>
                                        <h6>
                                            <b>Dr. Pooja Deshmukh,</b> BAMS
                                        </h6>
                                        <span>
                                            <img src="../Assets/star.png" alt="star" className='star-img' />
                                        </span>
                                    </div>
                                </div>
                                <div className='review-content'>
                                    "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='feedback-slide'>
                        <Card className='feedback-slide-card'>
                            <Card.Body>
                                <div className='slide-header-section'>
                                    <div>
                                        <img src="../Assets/Reveiw-img.jpg" alt="review-img" className='review-img' />
                                    </div>
                                    <div className='review-heading'>
                                        <h6>
                                            <b>Dr. Pooja Deshmukh,</b> BAMS
                                        </h6>
                                        <span>
                                            <img src="../Assets/star.png" alt="star" className='star-img' />
                                        </span>
                                    </div>
                                </div>
                                <div className='review-content'>
                                    "Amrutam’s formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing."
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Slider>
            </div>

        </div>
    )
}

export default FeedBack