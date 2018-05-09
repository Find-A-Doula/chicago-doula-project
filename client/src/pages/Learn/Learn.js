import React, { Component } from 'react';
import './learn.css';
import { Row, Col } from 'react-flexbox-grid';
import WhyDoula from '../../components/WhyDoula';
import { Link } from 'react-router-dom';
import StdBtn from '../../components/StdBtn'

const info = {
  sections: [
    {
      key: '01',
      logo: 'one',
      reason: 'Parental Support',
      explanation: 'A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.'
    },
    {
      key: '02',
      logo: 'two',
      reason: 'POSTPARTUM SUPPORT',
      explanation: 'A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.'
    },
    {
      key: '03',
      logo: 'three',
      reason: 'EMOTIONAL SUPPORT',
      explanation: 'A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.'
    },
    {
      key: '04',
      logo: 'four',
      reason: 'MUCH MORE',
      explanation: 'A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.'
    }
  ]
};

class Learn extends Component {
  render() {
    return (


      <div className="learn-page">

        <div className="nav">
          <div className="nav-header">
            <div className="nav-title">
            <Link to="/home">
              <img src="/images/CDP_LOGO_BIG-01.png" alt="logo" height="50" width="100"/>
            </Link>

            </div>
          </div>
          <div className="nav-btn">
            <label for="nav-check">
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
          <input type="checkbox" id="nav-check"/>
            <div className="nav-links">
              <Link to="/home">Home</Link>
              <Link to="/comingsoon">Find Doula</Link>
            </div>
        </div>

        <div className="doula">
          <Row>
            <Col xs={12}>
              <Row center="xs">
                <h1>What is a Doula?</h1>
              </Row>
              <Row className="doula-header" center="xs">
                <p>
                  A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.
                </p>
              </Row>

              <div>
                {info.sections.map(section => <WhyDoula section={section} key={section.key} />)}
              </div>
              <Row center="xs">
                <Link to="/comingsoon">
                  <StdBtn value="Find a Doula"/>
                </Link>
              </Row>

            </Col>

          </Row>

        </div>
      </div>
    );
  }
}
export default Learn;
