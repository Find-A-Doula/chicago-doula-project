import React, { Component } from 'react';
import './learn.css';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Learn extends Component {


  render() {
    return (
      <div className="learn-page">
        <h1>Chicago Doula Project</h1>
        <div className="doula">
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <h1>What is a Doula?</h1>
              </Row>
              <Row center="xs">
                <p>A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.</p>
              </Row>
              <Row center="xs" className="doula-reasons">
                <Col xs={12} sm={4}>
                  <p>Picture here</p>
                </Col>
                <Col xs={12} sm={8} right="xs">
                  <h3>Parental Support</h3>
                  <p>Doulas are trained to assist families and provide informational after the baby is born.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
      );
    }
  }

  export default Learn;
