import React, { useState } from 'react'
import "../Styles/filter.css";
import { Button, Container, Row } from 'react-bootstrap';

const Filter = () => {

    const [consultations, setConsultations] = useState(true);
    const [payment, setPayment] = useState(false);
    const [schedule, setSchedule] = useState(false);

    return (
        <div className='filter-section pt-3'>
            <Container>
                <div className='filter-screen pb-3'>
                    <div className={`filter-btn ${consultations ? "active" : ""}`}

                        onClick={() => {
                            setConsultations(true);
                            setPayment(false);
                            setSchedule(false);
                        }}
                    >
                        Consultations
                    </div>
                    <div className={`filter-btn ${payment ? "active" : ""}`}
                        onClick={() => {
                            setConsultations(false);
                            setPayment(true);
                            setSchedule(false);
                        }}
                    >Payment withdrawal</div>
                    <div className={`filter-btn ${schedule ? "active" : ""}`}

                        onClick={() => {
                            setConsultations(false);
                            setPayment(false);
                            setSchedule(true);
                        }}
                    >Schedule</div>
                </div>

                <div className='pt-5 pb-5'>
                    {consultations ? (<>
                        <Row>
                            <div className='col-md-4 mt-2 mb-2'>

                                <div className='consultation-screen-title'>
                                    <h6>Value Your Practice</h6>
                                </div>
                                <div>
                                    <img src="../Assets/Value-Your-Practice.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                            </div>

                            <div className='col-md-4 mt-2 mb-2'>
                                <div>
                                    <img src="../Assets/Today's-Healing-Journey.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                                <div className='consultation-screen-title'>
                                    <h6>Today's Healing Journey</h6>
                                </div>
                            </div>


                            <div className='col-md-4 mt-2 mb-2'>

                                <div className='consultation-screen-title'>
                                    <h6>Consultation Details</h6>
                                </div>
                                <div>
                                    <img src="../Assets/Consultation-Details.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                            </div>
                        </Row>
                    </>) :
                        (<></>)}

                    {payment ? (<><div>
                        <Row>
                            <div className='col-md-4 mt-2 mb-2'>

                                <div className='consultation-screen-title'>
                                    <h6>Your Earnings</h6>
                                </div>
                                <div>
                                    <img src="../Assets/Earnings.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                            </div>

                            <div className='col-md-4 mt-2 mb-2'>
                                <div>
                                    <img src="../Assets/Trusted-Transfer.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                                <div className='consultation-screen-title'>
                                    <h6>Trusted Transfers</h6>
                                </div>
                            </div>


                            <div className='col-md-4 mt-2 mb-2'>

                                <div className='consultation-screen-title'>
                                    <h6>Smooth-Settlement</h6>
                                </div>
                                <div>
                                    <img src="../Assets/Smooth-settlement.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                            </div>
                        </Row>
                    </div></>) : (<></>)}


                    {schedule ? (<><div>
                        <Row>
                            <div className='col-md-4 mt-2 mb-2'>

                                <div className='consultation-screen-title'>
                                    <h6>Choose Your Perfect Day</h6>
                                </div>
                                <div>
                                    <img src="../Assets/perfect-day.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                            </div>

                            <div className='col-md-4 mt-2 mb-2'>
                                <div>
                                    <img src="../Assets/time-works-for-u.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                                <div className='consultation-screen-title'>
                                    <h6>Times That Works For You</h6>
                                </div>
                            </div>


                            <div className='col-md-4 mt-2 mb-2'>

                                <div className='consultation-screen-title'>
                                    <h6>Effortless Overview</h6>
                                </div>
                                <div>
                                    <img src="../Assets/Effortless-overview.png" alt="value-your-practice" className='value-your-practice' />
                                </div>
                            </div>
                        </Row>
                    </div></>) : (<></>)}
                </div>
                <div className='pt-2 pb-5'>
                    <Button className='filter-joinnow-btn'>Join Now</Button>
                </div>

            </Container>
        </div>
    )
}



export default Filter