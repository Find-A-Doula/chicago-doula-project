import React, { Component } from 'react';
import './learn.css';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import WhyDoula from '../../components/WhyDoula';

const info = {
  sections: [
    {
      key: '01',
      logo: './../../assets/img/learnDoula/one.png',
      reason: 'Parental Support',
      explanation: 'A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.'
    },
    {
      key: '02',
      logo: './../assets/img/learnDoula/two.png',
      reason: 'POSTPARTUM SUPPORT',
      explanation: 'A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.'
    },
    {
      key: '03',
      logo: './../assets/img/learnDoula/three.png',
      reason: 'EMOTIONAL SUPPORT',
      explanation: 'A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.'
    },
    {
      key: '04',
      logo: './../assets/img/learnDoula/four.png',
      reason: 'MUCH MORE',
      explanation: 'A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.'
    }
  ]
};

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
                <p>
                  A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.
                </p>
              </Row>

              <div>
                {info.sections.map(section => <WhyDoula section={section} key={section.key} />)}
              </div>
              <Row center="xs" center="xs">
                <button class="button">Find a Doula</button>
              </Row>

            </Col>

          </Row>

        </div>
      </div>
    );
  }
}
export default Learn;
