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
        <div id="question01">
          <Row center="xs" className="question">
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
      </Grid>
    );
  }
}

export default UserSurvey;
