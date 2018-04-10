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

class PostpartumDoulaSurvey extends Component {
  state = {
    // Doula Type
    birthDoula: false,
    postpartumDoula: true,
    // Postpartum Doula Specifics
    firstChild: false,
    haveChildren: false,
    doulaYearsOfExperiences: 0,
    careAfterCaesarean: false,
    premature: false,
    nursingLactation: false,
    cookingNutrition: false,
    multiples: false,
    postpartumMoodSwings: false,
    infantFirstAid: false,
    overnightAvailability: false,
    otherChildCare: false,
    hasVehicle: false,
    disabilities: false,
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
                      checked={this.state.firstChild}
                      label="This is my first child."
                      onChange={this.handleChange.bind(this, 'firstChild')}
                    />
                    <Checkbox
                      checked={this.state.haveChildren}
                      label="I have children."
                      onChange={this.handleChange.bind(this, 'haveChildren')}
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
                    <Checkbox
                      checked={this.state.careAfterCaesarean}
                      label="Care After Caesarean Birth"
                      onChange={this.handleChange.bind(this, 'careAfterCaesarean')}
                    />
                    <Checkbox
                      checked={this.state.premature}
                      label="Premature Births"
                      onChange={this.handleChange.bind(this, 'premature')}
                    />
                    <Checkbox
                      checked={this.state.multiples}
                      label="Multiple Births"
                      onChange={this.handleChange.bind(this, 'multiples')}
                    />
                    <Checkbox
                      checked={this.state.nursingLactation}
                      label="Nursing/Lactation Consulting"
                      onChange={this.handleChange.bind(this, 'nursingLactation')}
                    />
                    <Checkbox
                      checked={this.state.cookingNutrition}
                      label="Cooking and Nutrition"
                      onChange={this.handleChange.bind(this, 'cookingNutrition')}
                    />
                    <Checkbox
                      checked={this.state.postpartumMoodSwings}
                      label="Postpartum Mood Swings"
                      onChange={this.handleChange.bind(this, 'postpartumMoodSwings')}
                    />
                    <Checkbox
                      checked={this.state.infantFirstAid}
                      label="Infant First Aid &amp; CPR"
                      onChange={this.handleChange.bind(this, 'infantFirstAid')}
                    />
                  </Col>
                  <Col mdOffset={1} xsOffset={1}>
                    <Checkbox
                      checked={this.state.overnightAvailability}
                      label="Overnight Availability"
                      onChange={this.handleChange.bind(this, 'overnightAvailability')}
                    />
                    <Checkbox
                      checked={this.state.otherChildCare}
                      label="Caring for Older Children"
                      onChange={this.handleChange.bind(this, 'otherChildCare')}
                    />
                    <Checkbox
                      checked={this.state.hasVehicle}
                      label="Car with License and Registration (Parent Provides Car Seat)"
                      onChange={this.handleChange.bind(this, 'hasVehicle')}
                    />
                    <Checkbox
                      checked={this.state.disabilities}
                      label="People with Disabilities"
                      onChange={this.handleChange.bind(this, 'disabilities')}
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

export default PostpartumDoulaSurvey;
