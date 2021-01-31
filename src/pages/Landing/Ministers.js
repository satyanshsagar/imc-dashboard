import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Landing.css';
function Ministers() {
  return (
        <>
          <div className="image--container">
            <div className="image--holder">
              <img
              className="ministers--image"
              src="resources/banner_4.jpeg"
              alt="First slide"
              />
            </div>
            <div className="image--holder">
              <img
              className="ministers--image"
              src="resources/banner_3.jpeg"
              alt="First slide"
              />
            </div>
          </div>
        </>
  )
}

export default Ministers
