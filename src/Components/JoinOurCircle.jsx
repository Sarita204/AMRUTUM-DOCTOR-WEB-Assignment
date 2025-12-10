import React, { useState } from 'react'
import "../Styles/joincircle.css"
import { Card, Container, Row } from 'react-bootstrap'
const JoinOurCircle = () => {

    const [activeImage, setActiveImage] = useState("../Assets/Img-Step-1.png");

    return (
        <div className='join-our-section'>
            <h3>Join Our Circle of Care</h3>
            <p>Becoming a part of Amrutam is simple</p>

            <Container>
                <Row>
                    <div className='col-md-6 pt-5 pb-5'>
                        <Card className='join-our-cards mb-2 mt-2'
                            onMouseEnter={() => setActiveImage("../Assets/Img-Step-1.png")}>
                            <Card.Body>
                                <Card.Title className='join-our-card-heading mt-1'>Step 1: Get your referral code</Card.Title>
                                <Card.Text className='join-our-card-tagline mb-1'>
                                    Contact us to receive your unique referral code.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='join-our-cards mb-2 mt-2'
                            onMouseEnter={() => setActiveImage("../Assets/Img-Step-2.png")}>
                            <Card.Body>
                                <Card.Title className='join-our-card-heading mt-1'>Step 2: Register on Amrutam</Card.Title>
                                <Card.Text className='join-our-card-tagline mb-1'>
                                    Sign up on the Amrutam Doctors app or website to join our specialist network.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='join-our-cards mb-2 mt-2'
                            onMouseEnter={() => setActiveImage("../Assets/Img-Step-3.png")}>
                            <Card.Body>
                                <Card.Title className='join-our-card-heading mt-1'>Step 3: Complete KYC</Card.Title>
                                <Card.Text className='join-our-card-tagline mb-1'>
                                    Fill in your details and upload the required documents for verification.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                        <Card className='join-our-cards mb-2 mt-2'
                            onMouseEnter={() => setActiveImage("../Assets/Img-Step-4.png")}>
                            <Card.Body>
                                <Card.Title className='join-our-card-heading mt-1'>Step 4: Start consulting</Card.Title>
                                <Card.Text className='join-our-card-tagline mb-1'>
                                    Once verified, begin offering consultations and helping patients.                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='col-md-6'>
                        <img src={activeImage} className="join-our-cardactive-img" alt="front" />
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default JoinOurCircle