import React from 'react';
import "../Styles/faq.css"
import { Button } from 'react-bootstrap';

const Faq = () => {
    return (
        <div className='faq-section pb-5'>
            <h3>Frequently Asked Questions</h3>
            <p>Find quick answers to common questions to help you navigate the app and its features easily.</p>

            <div className="container">
                <div className="row">
                    <div className="" data-aos="fade-up" data-aos-duration="3000">
                        <div className="contact-form-section">
                            <div className="form-container" style={{ border: "none" }}>
                                <div className="faq">
                                    <ul className="accordian" style={{ padding: "0px" }}>
                                        <li>
                                            <input type="radio" name="accordian" id="first" />
                                            <label htmlFor="first">What is Amrutam?</label>
                                            <div className="content">
                                                <p style={{ color: "#4C4C4C" }}>
                                                    Amrutam is a trusted platform connecting, Ayurvedic expert with people seeking holistic healthcare solution. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <input type="radio" name="accordian" id="second" />
                                            <label htmlFor="second">How does Amrutam help me grow as a practitioner?</label>
                                            <div className="content">
                                                <p>
                                                    Amrutam is a trusted platform connecting, Ayurvedic expert with people seeking holistic healthcare solution. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <input type="radio" name="accordian" id="third" />
                                            <label htmlFor="third">How do I become a part of Amrutam Doctor?</label>
                                            <div className="content">
                                                <p>
                                                    Amrutam is a trusted platform connecting, Ayurvedic expert with people seeking holistic healthcare solution. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="radio" name="accordian" id="fourth" />
                                            <label htmlFor="fourth">What is Amrutam Global as a platform?</label>
                                            <div className="content">
                                                <p>
                                                    Amrutam is a trusted platform connecting, Ayurvedic expert with people seeking holistic healthcare solution. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <input type="radio" name="accordian" id="fourth" />
                                            <label htmlFor="fourth">What documents do I need to provide?</label>
                                            <div className="content">
                                                <p>
                                                    Amrutam is a trusted platform connecting, Ayurvedic expert with people seeking holistic healthcare solution. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <input type="radio" name="accordian" id="fourth" />
                                            <label htmlFor="fourth">Is there a fee to join Amrutam?</label>
                                            <div className="content">
                                                <p>
                                                    Amrutam is a trusted platform connecting, Ayurvedic expert with people seeking holistic healthcare solution. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-2 pb-5'>
                    <Button className='filter-joinnow-btn'>See More</Button>
                </div>
            </div>
        </div>
    )
}

export default Faq