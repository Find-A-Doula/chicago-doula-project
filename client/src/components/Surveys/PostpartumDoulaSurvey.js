import React, { Component } from 'react';
import Checkbox from 'react-toolbox/lib/checkbox/Checkbox';
import Input from 'react-toolbox/lib/input/Input';
import Button from 'react-toolbox/lib/button/Button';
import { Row, Col } from 'react-flexbox-grid';
import './survey.css';

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

  handleDropdownChange = value => {
    this.setState({ doulaYearsOfExperiences: value });
  };

  render() {
    return (
      <div>

        <div id="question02">
          <Row start="xs">
            <Col xs={6}>
              <Row start="xs">
                <h3 className="questionTitle">About Your Pregnancy:</h3>
              </Row>
              <Row center="xs">
                <Col xs={6}>
                  <Checkbox
                    checked={this.state.firstChild}
                    label="This is my first child."
                    onChange={this.handleChange.bind(this, 'firstChild')}
                  />
                </Col>
                <Col xs={6}>
                  <Checkbox
                    checked={this.state.haveChildren}
                    label="I have children."
                    onChange={this.handleChange.bind(this, 'haveChildren')}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div id="question03">
          <Row>
            <div>
              <h3 className="questionTitle">
                Are you looking for a doula with experience in any of the following? (Check all that apply)
              </h3>

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
            </div>
          </Row>
        </div>

        <div id="question05">
          <Row>

            <h3 className="questionTitle">
              Please Enter Your Zip Code:
            </h3>
          </Row>
          <Row>
            <Input
              type="text"
              label="Your Zip Code"
              name="userZipCode"
              value={this.state.userZipCode}
              onChange={this.handleChange.bind(this, 'userZipCode')}
              maxLength={5}
            />
          </Row>
        </div>

        <div className="submitSurvey">
          <Row>
            <Button type="submit" raised style={{ marginTop: '40px', marginBottom: '40px' }}>Submit</Button>
          </Row>
        </div>

      </div>
    );
  }
}

export default PostpartumDoulaSurvey;
