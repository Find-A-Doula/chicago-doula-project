import React, { Component } from 'react';
import './user-survey.css';
import Dropdown from 'react-toolbox/lib/dropdown';
import background from '../../assets/img/baby.png';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BirthDoulaSurvey, PostpartumDoulaSurvey } from '../../components/Surveys';

const doulas = [{ value: 'birthDoula', label: 'Birth' }, { value: 'postpartumDoula', label: 'Postpartum' }];

class UserSurvey extends Component {
  state = {
    doulaType: ''
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  handleChange = (name, value) => {
    this.setState({ ...this.state, [name]: value });
  };

  handleDropdownChange = value => {
    this.setState({ doulaType: value });
  };

  render() {
    return (
      <div>
        <img src={background} className="search-background" alt="Background" />
        <Grid fluid>
          <div id="question01">
            <Row center="xs">
              <Col xs={12} sm={5}><h2 className="first-question">I am looking for a</h2></Col>
              <Col xs={6} sm={3}>
                <Dropdown auto onChange={this.handleDropdownChange} source={doulas} value={this.state.doulaType} />
              </Col>
              <Col xs={12} sm={2}><h2>doula.</h2></Col>
            </Row>
          </div>

          {this.state.doulaType === 'birthDoula' ? <BirthDoulaSurvey /> : <div />}
          {this.state.doulaType === 'postpartumDoula' ? <PostpartumDoulaSurvey /> : <div />}
        </Grid>
      </div>
    );
  }
}

export default UserSurvey;
