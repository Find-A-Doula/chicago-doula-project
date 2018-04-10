import React, { Component } from 'react';
// import './user-survey.css';
import Checkbox from 'react-toolbox/lib/checkbox';
import Slider from 'react-toolbox/lib/slider';
import Input from 'react-toolbox/lib/input';
import { Card, CardTitle, CardText } from 'react-toolbox/lib/card';
// import { Button, IconButton } from 'react-toolbox/lib/button';
import Button from 'react-toolbox/lib/button/Button';
import { Grid, Row, Col } from 'react-flexbox-grid';
// import theme from './survey.css';

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

  handleSliderChange = (slider, value) => {
    const newState = {};
    newState[slider] = value;
    this.setState(newState);
  };

  render() {
    return (
      <Grid fluid>
        <div>

          <div id="question02">
            <Row center="xs">
              <Card style={{ width: '450px', backgroundColor: '#f2ece3' }}>
                <CardTitle title="About Your Pregnancy:" />

                <Row start="xs">
                  <CardText style={{ paddingLeft: '60px' }}>
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
                  </CardText>
                </Row>
              </Card>
            </Row>
          </div>

          <div id="question03">
            <Row center="xs">
              <Card style={{ width: '450px', backgroundColor: '#f2ece3', marginTop: '40px' }}>
                <CardTitle title="I am looking for a doula with at least ___ years of experience:" />
                <Slider
                  pinned
                  snaps
                  min={0}
                  max={10}
                  step={1}
                  editable
                  value={this.state.doulaYearsOfExperiences}
                  onChange={this.handleSliderChange.bind(this, 'doulaYearsOfExperiences')}
                />
              </Card>
            </Row>
          </div>

          <div id="question04">
            <Row center="xs">
              <Card style={{ width: '850px', backgroundColor: '#f2ece3', marginTop: '40px' }}>
                <CardTitle title="Are you looking for a doula with experience in any of the following? (Check all that apply)" />

                <Row start="xs">
                  <Col mdOffset={1} xsOffset={1}>
                    <Checkbox checked={this.state.vbac} label="VBAC" onChange={this.handleChange.bind(this, 'vbac')} />
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
                  <Col mdOffset={1} xsOffset={1}>
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
                      label="Trauma Informed Birthdays"
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
                  <Col mdOffset={1} xsOffset={1}>
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
              </Card>
            </Row>
          </div>

          <div id="question05">
            <Row center="xs">
              <Card style={{ width: '450px', backgroundColor: '#f2ece3', marginTop: '40px' }}>
                <CardTitle title="Please Enter Your Zip Code:" />

                <CardText>
                  <Input
                    type="text"
                    label="Your Zip Code"
                    name="userZipCode"
                    value={this.state.userZipCode}
                    onChange={this.handleChange.bind(this, 'userZipCode')}
                    maxLength={5}
                  />
                </CardText>

              </Card>
            </Row>
          </div>

          <div className="submitSurvey">
            <Row center="xs">
              <Button type="submit" raised style={{ marginTop: '40px', marginBottom: '40px' }}>Submit</Button>
            </Row>
          </div>

        </div>
      </Grid>
    );
  }
}

export default BirthDoulaSurvey;
