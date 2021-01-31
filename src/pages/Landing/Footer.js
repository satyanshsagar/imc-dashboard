import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHome, faPlane, faPhone, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'

import './Footer.css'

function Footer() {
  return (
    <div className='bg-dark'>
      <div className="footer-container">
        <div className="footer-grid1">
            <div className="footer-text-normal">
              <div className="carTextHolder--imp"><img
                      src={'resources/Untitled-design-1-1-150x150.png'}
                      className="d-inline-block align-top logo--size"
                      alt="React Bootstrap logo"/>
                </div>
              </div>
            <div className="footer-text-normal">
                <div className="footer-text-header">Registered Office Address:</div> <br/>
                Karnataka Vocational Training and Skill Development Corporation Ltd., 3rd Floor, Kaushalya Bhavana, ITI Compound, Near Dairy Circle, Bannerghatta Road, Bengaluru-560029
            </div>
        </div>
        <div className="footer-grid1">
            <div className="footer-text-header"> USEFUL LINKS</div>
            <ul>
              <li className="footer-text-normal-links"> <a> <FontAwesomeIcon icon={faHome} /> Home</a></li>
              <li className="footer-text-normal-links"> <a> <FontAwesomeIcon icon={faUsers} /> About</a></li>
              <li className="footer-text-normal-links"> <a> <FontAwesomeIcon icon={faPlane}/> Migration</a></li>
            </ul>
            <div className="footer-grid1 footer-grid-mobile">
              <div className="footer-text-header"> CONTACT DETAILS</div>
              <ul>
                <li className="footer-text-normal-links"> <FontAwesomeIcon icon={faPhone}/> <a href="+91 -80-29753007"> +91 -80-29753007</a></li>
                <li className="footer-text-normal-links"> <FontAwesomeIcon icon={faEnvelope}/><a>    hr.kvtsdcora@karnataka.gov.in</a></li>
                <li className="footer-text-normal-links">  <FontAwesomeIcon icon={faLink}/><a>  http://www.imckarnataka.com/</a></li>
              </ul>
            </div>
        </div>
        <div className="footer-grid1 footer-grid-web">
            <div className="footer-text-header"> CONTACT DETAILS</div>
            <ul>
              <li className="footer-text-normal-links"> <FontAwesomeIcon icon={faPhone}/> <a href="+91 -80-29753007"> +91 -80-29753007</a></li>
              <li className="footer-text-normal-links"> <FontAwesomeIcon icon={faEnvelope}/> <a> hr.kvtsdcora@karnataka.gov.in</a></li>
              <li className="footer-text-normal-links">  <FontAwesomeIcon icon={faLink}/> <a> http://www.imckarnataka.com/</a></li>
            </ul>
          </div>
      </div>
      <br/>
      <div className="footer-text-normal-links1"> <a>Copyright © 2021 International Migration Centre – Karnataka​​ | Powered by Free Software Foundation </a> </div>
      <br/><br/><br/><br/>
    </div>
  )
}

export default Footer
