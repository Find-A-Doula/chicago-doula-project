import React, { Component } from 'react';
import './learn.css';
import { Row, Col } from 'react-flexbox-grid';
import WhyDoula from '../../components/WhyDoula';
import { Link } from 'react-router-dom';
import StdBtn from '../../components/StdBtn';
import NavBar from '../../components/NavBar';

const info = {
  sections: [
    {
      key: '01',
      logo: 'one',
      reason: 'Parental Support',
      explanation: "In the weeks leading up to the birth, doulas are there to listen to the expecting mother's hopes and fears, help her create a birth plan, and empower her to make the best choices for her and her family."
    },
    {
      key: '02',
      logo: 'two',
      reason: 'Postpartum Support',
      explanation: 'Although doulas are not medical professionals, they do play an important role in the birth process  providing comfort measures such as massage, guided breathing, and recommending various positions for pain relief. The doula is there for physical and emotional support  during every type of birth.'
    },
    {
      key: '03',
      logo: 'three',
      reason: 'Emotional Support',
      explanation: 'After the baby arrives, doulas help families adapt to the stresses and joys of having a newborn. Doulas provide breastfeeding support, infant care advice and an extra hand around the house allowing the family to spend more time with their newborn.'
    },
    {
      key: '04',
      logo: 'four',
      reason: 'Much More',
      explanation: "The doula's role goes beyond birth. There are doulas that support families through the adoption process, miscarriages, abortions, and other life experiences."
    }
  ]
};

class Learn extends Component {
  render() {
    return (
      <div className="learn-page">
      <NavBar currentPage="/learn"/>

        <div className="learn-page">
          <div className="doula">
            <Row>
              <Col xs={12}>

                <Row center="xs">
                  <h1>What is a Doula?</h1>
                </Row>

                <Row className="doula-intro" center="xs">
                  <p>
                    A professional trained in childbirth who provides constant physical and emotional support to families before, during and after pregnancy to help them achieve most satisfying birth experience possible.
                  </p>
                </Row>
                <Row className="doula-desc" center="xs">
                  <div>
                    {info.sections.map(section => <WhyDoula section={section} key={section.key} />)}
                  </div>
                </Row>

                <Row className="doula-header" center="xs">
                  <p> Some doulas focus in one area while others have experience in various roles. </p>
                </Row>

                <Row center="xs" style={{ paddingBottom: '40px' }}>
                  <Link to="/comingsoon">
                    <StdBtn value="Find a Doula" />
                  </Link>
                </Row>

              </Col>

            </Row>

          </div>
        </div>
      </div>
    );
  }
}
export default Learn;
