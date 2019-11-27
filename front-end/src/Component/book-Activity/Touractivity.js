import React, { Component } from 'react'
import { Link } from 'react-router-dom'


import { Row, Container, Col, Nav, Dropdown, Button, Form, CardGroup, Card } from 'react-bootstrap'



export default class Touractivity extends Component {

  render() {
    return (
      <Container>
        <div>
          {/* Card #1: Activity 1*/}
          <div className="card mb-3" style={{ "width": "500px" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtDAhZNPEr2gfQGqkl6XQUboJa8WBKVAkqQcgLk7vD4QHtu1dYeQ&s"  className="card-img" alt="Albalad in Jeddah" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title"><strong>Desert Sea Divers</strong></h4>
                  <p className="card-text"><strong><em>Desert Sea Divers' vision is to be the best option in recreational scuba diving, free diving, snorkeling and boat trips. Our Mission Desert Sea Divers mission is to share the passion for the underwater world through snorkeling, diving and boat trips with the highest possible world-class standard of training, safety, and customer service for an enjoyable experience.­</em></strong></p>
                  <p className="card-text"><small className="text-muted">Open Now</small></p>
                  <Button variant="link" as={Link} to={`/tours/booking/${11}`}>book me now!</Button>


                  {/*button to be added */}
                </div>
              </div>
            </div>
          </div>


          {/* Card #2: Activity 2*/}
          <div className="card mb-3" style={{ "width": "500px" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <img src="data:image/jpeg;base64,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" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title"><strong>Overboard</strong></h4>
                  <p className="card-text"><strong><em>A visit to Jeddah is incomplete without exciting experience of a Desert Safari , diving at the most beautiful spot at the Red Sea. If you want to live new experience in Jeddah, we are offering several outdoor activities that are provided by well trained team. Visit our website to know more about us.</em></strong></p>
                  <p className="card-text"><small className="text-muted">Open Now</small></p>
                  <Button variant="link" as={Link} to={`/tours/booking/${22}`}>book me now!</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Card #3: Activity 3*/}

          <div className="card mb-3" style={{ "width": "500px" }}>
            <div className="row no-gutters">
              <div className="col-md-3">
                <img src="https://images.tripshock.com/activity/2727/275/Clearwater-Helicopter-Tour-with-Tampa-Bay-Aviation.jpg" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title"><strong>West Sky Aviation</strong></h4>
                  <p className="card-text"><strong><em>Enjoy a sky overview of Jeddah and soar high with us.</em></strong></p>
                  <p className="card-text"><small className="text-muted">Open Now</small></p>
                  <Button variant="link" as={Link} to={`/tours/booking/${33}`} >book me now!</Button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    )
  }
}



