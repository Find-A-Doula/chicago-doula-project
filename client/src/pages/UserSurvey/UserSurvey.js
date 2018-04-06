import React, { Component } from 'react';
import './user-survey.css';
import Checkbox from 'react-toolbox/lib/checkbox';
import Input from 'react-toolbox/lib/input';
import { Grid, Row, Col } from 'react-flexbox-grid';

class UserSurvey extends Component {
  state = {
    // Doula Type
    birthDoula: false,
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

  render() {
    return (
      <Grid fluid>

        {!this.state.birthDoula && !this.state.postpartumDoula
          ? <div id="question01">
              <Row center="xs" className="first-question">
                <p>I am looking for a:</p>
              </Row>
              <Row center="xs">
                <Col xs={10} md={4}>
                  <Checkbox
                    checked={this.state.birthDoula}
                    label="Birth Doula"
                    onChange={this.handleChange.bind(this, 'birthDoula')}
                  />
                </Col>
                <Col xs={10} md={4}>
                  <Checkbox
                    checked={this.state.postpartumDoula}
                    label="Postpartum Doula"
                    onChange={this.handleChange.bind(this, 'postpartumDoula')}
                  />
                </Col>
              </Row>
            </div>
          : <div />}

        {this.state.birthDoula
          ? <div>
              <div id="question02">
                <h2>I am looking for a birth doula...</h2>
                <Row center="xs">
                  <p className="question">Your Pregnancy:</p>
                </Row>
                <Row start="xs">
                  <Col mdOffset={4} xsOffset={1}>
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
              </div>

              <div id="question03">
                <Row center="xs">
                  <p className="question">I am interested in...</p>
                </Row>
                <Row start="xs">
                  <Col mdOffset={2} xsOffset={1}>
                    <Checkbox checked={this.state.vbac} label="vbac" onChange={this.handleChange.bind(this, 'vbac')} />
                    <Checkbox
                      checked={this.state.multiples}
                      label="multiples"
                      onChange={this.handleChange.bind(this, 'multiples')}
                    />
                    <Checkbox
                      checked={this.state.premature}
                      label="premature"
                      onChange={this.handleChange.bind(this, 'premature')}
                    />
                    <Checkbox
                      checked={this.state.nursingLactation}
                      label="nursingLactation"
                      onChange={this.handleChange.bind(this, 'nursingLactation')}
                    />
                    <Checkbox
                      checked={this.state.highRisk}
                      label="highRisk"
                      onChange={this.handleChange.bind(this, 'highRisk')}
                    />
                    <Checkbox
                      checked={this.state.lgbtqFamily}
                      label="lgbtqFamily"
                      onChange={this.handleChange.bind(this, 'lgbtqFamily')}
                    />
                  </Col>
                  <Col mdOffset={2} xsOffset={1}>
                    <Checkbox checked={this.state.teen} label="teen" onChange={this.handleChange.bind(this, 'teen')} />
                    <Checkbox
                      checked={this.state.singleParent}
                      label="singleParent"
                      onChange={this.handleChange.bind(this, 'singleParent')}
                    />
                    <Checkbox
                      checked={this.state.traumaInformed}
                      label="traumaInformed"
                      onChange={this.handleChange.bind(this, 'traumaInformed')}
                    />
                    <Checkbox
                      checked={this.state.familiesOfColor}
                      label="familiesOfColor"
                      onChange={this.handleChange.bind(this, 'familiesOfColor')}
                    />
                    <Checkbox
                      checked={this.state.adoption}
                      label="adoption"
                      onChange={this.handleChange.bind(this, 'adoption')}
                    />
                    <Checkbox
                      checked={this.state.disabilities}
                      label="disabilities"
                      onChange={this.handleChange.bind(this, 'disabilities')}
                    />
                  </Col>
                  <Col mdOffset={2} xsOffset={1}>
                    <Checkbox
                      checked={this.state.waterBirth}
                      label="waterBirth"
                      onChange={this.handleChange.bind(this, 'waterBirth')}
                    />
                    <Checkbox
                      checked={this.state.homeBirth}
                      label="homeBirth"
                      onChange={this.handleChange.bind(this, 'homeBirth')}
                    />
                    <Checkbox
                      checked={this.state.hospitalAdvocacy}
                      label="hospitalAdvocacy"
                      onChange={this.handleChange.bind(this, 'hospitalAdvocacy')}
                    />
                    <Checkbox
                      checked={this.state.prenatalYoga}
                      label="prenatalYoga"
                      onChange={this.handleChange.bind(this, 'prenatalYoga')}
                    />
                  </Col>
                </Row>
              </div>

            </div>
          : <div />}

      </Grid>
    );
  }
}

export default UserSurvey;
