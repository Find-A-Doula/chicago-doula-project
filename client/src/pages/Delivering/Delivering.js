import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import './delivering.css';

class Delivering extends Component {
  render() {
    return (
      <div className="delivering-page">
        <Row center="xs">
          <h1> We're working to deliver addition user experience! </h1>
        </Row>
        <Row center="xs">
          <div>

            <img className="stork" width="1000px" padding="20px" src="/images/delivering.png" alt="stork" />

          </div>
        </Row>

      </div>
    );
  }
}

export default Delivering;
