import React from 'react'
import "../Styles/whychooseus.css"
import { Container, Row } from 'react-bootstrap'

const WhyChooseUs = () => {
  return (
    <div className='why-chooseus-section'>
      <h3>Why Doctors Choose Us?</h3>
      <p>Unlock the Benefits of Smarter Healthcare Management and Patient Care</p>
      <Container className='pt-5 pb-3'>
        <Row>
          <div className='col-md-6 mt-2 mb-2'>
            <div className="why-choose-image-wrapper">
              <img src="../Assets/why-choose-us-img1.png" alt="" className="main-img" />
              <img src="../Assets/why-choose-us-call-icon.png" alt="" className="call-icon" />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='why-choose-us-content'>
              <h4>Instant <b>FREE</b> 5-Mins Call</h4>
              <p>We understand the importance of building trust with your patients. That’s why Amrutam offers a <b>free 5-minute call,</b> helping you connect instantly and foster lasting patient relationships with ease.</p>
            </div>
          </div>
        </Row>
      </Container>

      <Container className='pt-3 pb-3'>
        <Row>
          <div className='col-md-6'>
            <div className='why-choose-us-content'>
              <h4>Forum for Meaningful Connections</h4>
              <p>We value your journey in Ayurveda .The Amrutam Forum helps you engage with patients, answer questions, while the "Thoughts" section allows you to share deeper Ayurvedic wisdom.</p>
            </div>
          </div>
          <div className='col-md-6 mt-2 mb-2'>
            <div className="why-choose-image-wrapper">
              <img src="../Assets/why-choose-us-img2.png" alt="" className="main-img" />
            </div>
          </div>
        </Row>
      </Container>

      <Container className='pt-3 pb-3'>
        <Row>
          <div className='col-md-6 mt-2 mb-2'>
            <div className="why-choose-image-wrapper">
              <img src="../Assets/why-choose-us-img3.png" alt="" className="main-img" />
              {/* <img src="../Assets/why-choose-us-call-icon.png" alt="" className="call-icon" /> */}
            </div>
          </div>
          <div className='col-md-6'>
            <div className='why-choose-us-content'>
              <h4>Choose Your Session Mode</h4>
              <p>Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.</p>
            </div>
          </div>
        </Row>
      </Container>

      <Container className='pt-3 pb-3'>
        <Row>
          <div className='col-md-6'>
            <div className='why-choose-us-content'>
              <h4>Smart Wallet</h4>
              <p>We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.</p>
            </div>
          </div>
          <div className='col-md-6 mt-2 mb-2'>
            <div className="why-choose-image-wrapper">
              <img src="../Assets/why-choose-us-img4.png" alt="" className="main-img" />
            </div>
          </div>
        </Row>
      </Container>

      <Container className='pt-3 pb-5'>
        <Row>
          <div className='col-md-6 mt-2 mb-2'>
            <div className="why-choose-image-wrapper">
              <img src="../Assets/why-choose-us-img5.png" alt="" className="main-img" />
            </div>
          </div>
          <div className='col-md-6'>
            <div className='why-choose-us-content'>
              <h4>Flexible Work Timing</h4>
              <p>We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.</p>
            </div>
          </div>
        </Row>
      </Container>

    </div>
  )
}

export default WhyChooseUs