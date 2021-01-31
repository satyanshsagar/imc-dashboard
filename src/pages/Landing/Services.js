import React from 'react'
import Card from 'react-bootstrap/Card'
import './Landing.css'

function Services() {
  return (
    <div className="text-center">
      <div className="expertise--header">
        SERVICES
      </div>
      <div className="card--holder">
        <div className="customCard">
            <div className="carTextHolder">GENERAL ENQUIRY</div>
        </div>
        <div className="customCard">
            <div className="carTextHolder">REGISTRATION OF MIGRANTS </div>
        </div>
        <div className="customCard">
            <div className="carTextHolder">GRIEVIANCE REDRESSEL</div>
        </div>
        <div className="customCard">
            <div className="carTextHolder">SKILLING GUIDANCE</div>
        </div>
        <div className="customCard">
            <div className="carTextHolder">PDOT</div>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default Services
