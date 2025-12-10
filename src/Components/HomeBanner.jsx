import React from 'react'
import "../Styles/homebanner.css"
import { Button, Container, Row } from 'react-bootstrap'

const HomeBanner = () => {
    return (
        <div className='home-banner-section'>
            <Container>
                <Row>
                    <div className='col-md-7'>
                        <div className='home-banner-left-content'>
                            <h6 className='mb-3'>Namaste, Welcome to Amrutam</h6>
                            <h2 className='mb-3'>Join Amrutam - <span>Grow Your Practice</span> </h2>
                            <p >Connect with more patients, set your own schedule,</p>
                            <p className='mb-4'>and grow your Ayurvedic practice effortlessly.</p>
                            <Button className='home-banner-join-now-btn mb-4'>Join Now</Button>

                            <div className='number-content'>
                                <div className=''>
                                    <h4 className='numbers'>500+</h4>
                                    <span className='number-text'>Average Active Users</span>
                                </div>
                                <div className='horizontal-line'></div>
                                <div className=''>
                                    <h4 className='numbers'>40+</h4>
                                    <span className='number-text'>Average daily free calls</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div>
                            <img src="../Assets/home-banner-right-img.png" alt="banner-img" className='banner-right-img' />
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default HomeBanner