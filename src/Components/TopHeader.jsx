import React from 'react';
import "../Styles/topheader.css"
import { Button } from 'react-bootstrap';
import { FaUserDoctor } from 'react-icons/fa6';

const TopHeader = () => {
  return (
    <div className='top-header'>
      <h6>Register Yourself As An Amrutam Doctor</h6>
      <Button className='join-now-btn'>
        <span className='doctor-icon'><FaUserDoctor /></span>
        <span className='join-now-btn-content'>Join Now</span>
      </Button>
    </div>
  )
}

export default TopHeader