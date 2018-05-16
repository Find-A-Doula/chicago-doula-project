import React, { Component } from 'react';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import Input from 'react-toolbox/lib/input/Input';
import { Grid, Row, Col } from 'react-flexbox-grid';
import StdBtn from '../../components/StdBtn';
import './survey.css';
import woman01 from '../../assets/img/woman01.png';
import woman02 from '../../assets/img/woman02.png';
import woman05 from '../../assets/img/woman05.png';

class BirthDoulaSurvey extends Component {
  state = {
    // Doula Type
    birthDoula: true,
    postpartumDoula: false,
    // Birth Doula Specifics
    firstPregnancy: false,
    previousFullTermPregnancy: false,
    previousPrematurePregnancy: false,
    previousPregnancyLoss: false,
    previousPregnancyTerminated: false,
    doulaYearsOfExperiences: 0,
    vbac: false,
    multiples: false,
    premature: false,
    nursingLactation: false,
    highRisk: false,
    lgbtqFamily: false,
    teen: false,
    singleParent: false,
    traumaInformed: false,
    familiesOfColor: false,
    adoption: false,
    disabilities: false,
    waterBirth: false,
    homeBirth: false,
    hospitalAdvocacy: false,
    prenatalYoga: false,
    userZipCode: ''
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleDropdownChange = value => {
    this.setState({ doulaYearsOfExperiences: value });
  };

  render() {
    return (
      <Grid fluid>
        <div>
          <form>
            <div id="question02" className="questionWrapper">
              <Row start="xs">
                <Col mdOffset={3} md={5} sm={7}>
                  <h3 className="questionTitle">About Your Pregnancy:</h3>

                  <Row start="xs">
                    <Col mdOffset={1} xsOffset={1} className="checkboxWrapper">
                      <Checkbox
                        checked={this.state.firstPregnancy}
                        label="This is my first pregnancy."
                        onChange={this.handleChange.bind(this, 'firstPregnancy')}
                      />
                      <Checkbox
                        checked={this.state.previousFullTermPregnancy}
                        label="I've had a previous full term pregnancy."
                        onChange={this.handleChange.bind(this, 'previousFullTermPregnancy')}
                      />
                      <Checkbox
                        checked={this.state.previousPrematurePregnancy}
                        label="I've have a previous premature pregnancy."
                        onChange={this.handleChange.bind(this, 'previousPrematurePregnancy')}
                      />
                      <Checkbox
                        checked={this.state.previousPregnancyLoss}
                        label="I've lost a previous pregnancy."
                        onChange={this.handleChange.bind(this, 'previousPregnancyLoss')}
                      />
                      <Checkbox
                        checked={this.state.previousPregnancyTerminated}
                        label="I've terminated a previous pregnancy."
                        onChange={this.handleChange.bind(this, 'previousPregnancyTerminated')}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col md={1}>
                  <img src={woman01} className="woman01" alt="Woman" />
                </Col>
              </Row>
            </div>

            <div id="question03" className="questionWrapper">
              <Row start="xs">
                <Col mdOffset={1} md={1}>
                  <img src={woman02} className="woman02" alt="Woman" />
                </Col>
                <Col mdOffset={1} md={8} sm={7} style={{ marginLeft: '80px' }}>
                  <h3 className="questionTitle">I'd like my doula with skills in: (Check all that apply)</h3>

                  <Row start="xs">
                    <Col mdOffset={1} xsOffset={1} className="checkboxWrapper">
                      <Checkbox
                        checked={this.state.vbac}
                        label="VBAC"
                        onChange={this.handleChange.bind(this, 'vbac')}
                      />
                      <Checkbox
                        checked={this.state.multiples}
                        label="Multiple Births"
                        onChange={this.handleChange.bind(this, 'multiples')}
                      />
                      <Checkbox
                        checked={this.state.premature}
                        label="Premature Births"
                        onChange={this.handleChange.bind(this, 'premature')}
                      />
                      <Checkbox
                        checked={this.state.nursingLactation}
                        label="Nursing/Lactation Consulting"
                        onChange={this.handleChange.bind(this, 'nursingLactation')}
                      />
                      <Checkbox
                        checked={this.state.highRisk}
                        label="High Risk Pregnancies"
                        onChange={this.handleChange.bind(this, 'highRisk')}
                      />
                      <Checkbox
                        checked={this.state.lgbtqFamily}
                        label="LGBTQ Families"
                        onChange={this.handleChange.bind(this, 'lgbtqFamily')}
                      />
                    </Col>
                    <Col mdOffset={1} xsOffset={1} className="checkboxWrapper">
                      <Checkbox
                        checked={this.state.teen}
                        label="Teen Pregnancies"
                        onChange={this.handleChange.bind(this, 'teen')}
                      />
                      <Checkbox
                        checked={this.state.singleParent}
                        label="Single Parent Births"
                        onChange={this.handleChange.bind(this, 'singleParent')}
                      />
                      <Checkbox
                        checked={this.state.traumaInformed}
                        label="Trauma Informed Births"
                        onChange={this.handleChange.bind(this, 'traumaInformed')}
                      />
                      <Checkbox
                        checked={this.state.familiesOfColor}
                        label="Families of Color"
                        onChange={this.handleChange.bind(this, 'familiesOfColor')}
                      />
                      <Checkbox
                        checked={this.state.adoption}
                        label="Adoption Services"
                        onChange={this.handleChange.bind(this, 'adoption')}
                      />
                      <Checkbox
                        checked={this.state.disabilities}
                        label="Disabilities"
                        onChange={this.handleChange.bind(this, 'disabilities')}
                      />
                    </Col>
                    <Col mdOffset={1} xsOffset={1} className="checkboxWrapper">
                      <Checkbox
                        checked={this.state.waterBirth}
                        label="Water Births"
                        onChange={this.handleChange.bind(this, 'waterBirth')}
                      />
                      <Checkbox
                        checked={this.state.homeBirth}
                        label="Home Births"
                        onChange={this.handleChange.bind(this, 'homeBirth')}
                      />
                      <Checkbox
                        checked={this.state.hospitalAdvocacy}
                        label="Hospital Advocacy"
                        onChange={this.handleChange.bind(this, 'hospitalAdvocacy')}
                      />
                      <Checkbox
                        checked={this.state.prenatalYoga}
                        label="Prenatal Yoga"
                        onChange={this.handleChange.bind(this, 'prenatalYoga')}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>

            <div id="question04" className="questionWrapper">
              <Row start="xs">
                <Col mdOffset={3} md={4} sm={7}>
                  <h3 className="questionTitle">
                    Please Enter Your Zip Code:
                  </h3>
                  <Row start="xs" className="zipcodeWrapper">
                    <Col>
                      <Input
                        type="text"
                        label="Your Zip Code"
                        name="userZipCode"
                        value={this.state.userZipCode}
                        onChange={this.handleChange.bind(this, 'userZipCode')}
                        maxLength={5}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col mdOffset={1} md={1}>
                  <img src={woman05} className="woman05" alt="Woman" />
                </Col>
              </Row>
            </div>

            <div className="submitSurvey">
              <Row center="lg">
                <Col>
                  <StdBtn value="Submit" />
                </Col>
              </Row>
            </div>

          </form>
        </div>
      </Grid>
    );
  }
}

export default BirthDoulaSurvey;
