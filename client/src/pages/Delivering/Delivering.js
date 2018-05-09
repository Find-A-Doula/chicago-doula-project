import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import './delivering.css';
import StdBtn from '../../components/StdBtn';
import { Link } from 'react-router-dom';

class Delivering extends Component {
  render() {
    return (
      <div className="delivering-page">
        <Row center="xs">
          <h1 className="cookingHeader"> Still cooking in the oven. </h1>
        </Row>
        <Row center="xs">
          <Link to="/home">
            <StdBtn value="Home" />
          </Link>
        </Row>
        <Row center="xs">
          <div>

            <img className="stork" width="1000px" src="/images/delivering.png" alt="stork" />

          </div>
        </Row>

      </div>
    );
  }
}

export default Delivering;
