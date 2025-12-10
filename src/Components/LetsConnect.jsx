import React, { useState } from 'react'
import "../Styles/letsconnect.css"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const LetsConnect = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className='lets-connect-section pt-5 pb-5'>
            <h3>Let’s Connect</h3>
            <p>We’re here to help you on your wellness journey. Reach out to us for any questions, <br />product inquiries, or personalized advice.</p>

            <Container className='pt-3 pb-4'>
                <Row>
                    <div className='col-md-6'>
                        <div>
                            <img src="../Assets/left-connect-img.jpg" alt="lets-connect-img" className='lets-connect-img' />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-container">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="6">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control required type="text" placeholder="Your Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} md="6">
                                        <Form.Label>Your Contact Number</Form.Label>
                                        <Form.Control required type="number" placeholder="Your contact number" />
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" className='mt-3'>
                                        <Form.Label>Your Email</Form.Label>
                                        <Form.Control type="text" placeholder="Your Email" required />
                                    </Form.Group>

                                    <Form.Group as={Col} md="12" className='mt-3'>
                                        <Form.Label>Message (Optional)</Form.Label>
                                        <Form.Control type="text" placeholder="I want to On-board as a Doctor" />
                                    </Form.Group>
                                </Row>

                                <Button type="submit">Send Message</Button>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LetsConnect