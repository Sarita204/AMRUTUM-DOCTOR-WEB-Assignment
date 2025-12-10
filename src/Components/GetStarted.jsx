import React from 'react'
import "../Styles/getstarted.css"
import { Container, Row } from 'react-bootstrap'

const GetStarted = () => {
    return (
        <div className='get-started-section'>
            <Container>
                <Row>
                    <div className='col-md-6'>
                        <div className="getstarted-left-content">
                            <h3>Get Started Today – Download the App Now!</h3>
                            <p>Simplify consultations, manage patients, and grow your practice—all in one place.</p>

                            <div className='get-started-card-section'>
                                <div className='getstarted-card'>
                                    <div className='getstarted-header-section'>
                                        <div>
                                            <img src="../Assets/leaf.png" alt="leaf-img" className='getstarted-card-icons' />
                                        </div>
                                        <div className='getstarted-card-content'>
                                            <p>
                                                Build Trust and Community with Forum
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='getstarted-card'>
                                    <div className='getstarted-header-section'>
                                        <div>
                                            <img src="../Assets/money.png" alt="leaf-img" className='getstarted-card-icons' />
                                        </div>
                                        <div className='getstarted-card-content'>
                                            <p>
                                                Earn More with Pay Per Conversation
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='get-started-card-section'>
                                <div className='getstarted-card'>
                                    <div className='getstarted-header-section'>
                                        <div>
                                            <img src="../Assets/call.png" alt="leaf-img" className='getstarted-card-icons' />
                                        </div>
                                        <div className='getstarted-card-content'>
                                            <p>
                                                Attract Patients with  &nbsp; &nbsp; 5-Minute Free Call
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='getstarted-card'>
                                    <div className='getstarted-header-section'>
                                        <div>
                                            <img src="../Assets/wallet.png" alt="leaf-img" className='getstarted-card-icons' />
                                        </div>
                                        <div className='getstarted-card-content'>
                                            <p>
                                                Instant Access to Your Earnings with Wallet
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='google-app-store pt-4'>
                                <div>
                                    <img src="../Assets/play-store.png" alt="play-store" className='download-store-img' />
                                </div>
                                <div>
                                    <img src="../Assets/app-store.png" alt="app-store" className='download-store-img' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-5 mb-4'>
                        <div>
                            <img src="../Assets/get-started-right-img.png" alt="get-started-right-img" className='get-started-right-img' />
                        </div>
                    </div>
                </Row>
            </Container>

        </div>
    )
}

export default GetStarted