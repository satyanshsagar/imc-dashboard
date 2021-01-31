import React from 'react'
import {useDate} from './getDate';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './style.css'
function Header() {
  return (
    <>
    <div className="header--style">
      <div className="header--box logo--header">
        <div className="logo-container">
          <img
          src={'resources/ksdc.jpg'}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          />
        </div>
        <div className="logo-container">
          <img
          src={'resources/imck.jpg'}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          />
        </div>
        <div className="logo-container">
          <img
          src={'resources/gok.jpg'}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
          />
        </div>
      </div>
      <div className="main--header">
        <div className="brand--name" >

          <div className="header--style--main">International Migration Centre – Karnataka </div>
          <div className="header--style--sub"> ಕೌಶಲ್ಯಾಭಿವೃದ್ಧಿ, ಉದ್ಯಮಶೀಲತೆ ಮತ್ತು ಜೀವನೋಪಾಯ ಇಲಾಖೆ</div>
          <div className="header--style--sub"> Department of Skill Development and Entrepreneurship and Livelihood</div>
          <div  className="header--style--time1">{useDate()}</div>
        </div>
      </div>
    </div>
    <div  className="header--style--time2">{useDate()}</div>
    </>
  )
}

export default Header
