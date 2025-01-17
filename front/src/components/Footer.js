import React from 'react'
import { Col } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
    <Col xs={12} sm={12} md={12} lg={12} className='footer'>
      <p>Made with <i className="fab fa-rebel"></i> and <span id='React'>React</span> by Nadia DJELLALI &nbsp; | 2018</p>
    </Col>
  )
}

export default Footer
