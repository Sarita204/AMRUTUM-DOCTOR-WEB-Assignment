import React from 'react'
import "../Styles/footer.css";
import { Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer-section'>
            <Container>
                <Row>
                    <div className='col-md-4'>
                        <div>
                            <img src="../Assets/logo.png" alt="logo-img" className='footer-logo' />
                            <div className='get-in-touch'>
                                <h5>Get in touch</h5>
                            </div>
                            <div className='address-section'>
                                <p>support@amrutam.global</p>
                                <p>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
                                <p>+91 9713171999</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='information-section'>
                            <div className='information-heading'>
                                <h5>Information</h5>
                            </div>

                            <div className='information-items'>
                                <ul><li>
                                    About Us</li>
                                    <li>Terms and Conditions</li>
                                    <li>Privacy Policy</li>
                                    <li>Privacy Policy for Mobile App</li>
                                    <li>Shipping and Return Policy</li>
                                    <li>International Delivery</li>
                                    <li>For Business, Hotels and Resorts</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='social-icon-section'>
                            <div className='social-heading'>
                                <h5>Follow Us</h5>
                            </div>

                            <div className='social-icon-items'>
                                <div>
                                    <img src="../Assets/fb-icon.png" alt="fb-icon" className='social-icon' />
                                </div>
                                <div>
                                    <img src="../Assets/insta-icon.png" alt="insta-icon" className='social-icon' />
                                </div>
                                <div>
                                    <img src="../Assets/utube-icon.png" alt="utube-icon" className='social-icon' />
                                </div>
                                <div>
                                    <img src="../Assets/twitter-icon.png" alt="twitter-icon" className='social-icon' />
                                </div>
                                <div>
                                    <img src="../Assets/linkedin-icon.png" alt="linkedin-icon" className='social-icon' />
                                </div>
                                <div>
                                    <img src="../Assets/pinterest.png" alt="pinterest-icon" className='social-icon' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>

            </Container>

        </div>
    )
}

export default Footer