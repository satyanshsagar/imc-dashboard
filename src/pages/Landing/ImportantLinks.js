import React from 'react'
import Card from 'react-bootstrap/Card'
import './ImportantLink.css'

function ImportantLinks() {
  return (
    <div className="text-center">
      <div className="expertise--header">
        IMPORTANT LINKS
      </div>
      <div className="card--holder--imp">
        <div className="customCard--imp">
            <div className="carTextHolder--imp">
            <img
            src={'resources/kaushalkar.jpeg'}
            className="d-inline-block align-top logo--size"
            alt="React Bootstrap logo"
            />
            </div>
        </div>
        <div className="customCard--imp">
            <div className="carTextHolder--imp">
              <img
                  src={'resources/NRI-Forum-Karnataka.png'}
                  className="d-inline-block align-top logo--size"
                  alt="React Bootstrap logo"
                  />
              </div>
        </div>
        <div className="customCard--imp">
            <div className="carTextHolder--imp"><img
                src={'resources/Untitled-design-1-1-150x150.png'}
                className="d-inline-block align-top logo--size"
                alt="React Bootstrap logo"
                /></div>
        </div>
        <div className="customCard--imp">
            <div className="carTextHolder--imp"><img
                src={'resources/Untitled-design-1-300x300.png'}
                className="d-inline-block align-top logo--size"
                alt="React Bootstrap logo"
                /></div>
        </div>
        <div className="customCard--imp">
            <div className="carTextHolder--imp"><img
                src={'resources/Untitled-design-14-150x150.png'}
                className="d-inline-block align-top logo--size"
                alt="React Bootstrap logo"
                />
             </div>
        </div>
        <div className="customCard--imp">
            <div className="carTextHolder--imp">
            <img
                src={'resources/gamca.png'}
                className="d-inline-block align-top logo--size"
                alt="React Bootstrap logo"
                />
             </div>
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

export default ImportantLinks
