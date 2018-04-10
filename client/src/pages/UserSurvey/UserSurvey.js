import React, { Component } from 'react';
import theme from './user-survey.css';
import Dropdown from 'react-toolbox/lib/dropdown';
import { Grid, Row } from 'react-flexbox-grid';
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
      <Grid fluid>

        <div id="question01">
          <Row center="xs">
            <div><h2 className="first-question">I am looking for a</h2></div>
            <Dropdown auto onChange={this.handleDropdownChange} source={doulas} value={this.state.doulaType} />
            <div><h2>doula.</h2></div>
          </Row>
        </div>

        {this.state.doulaType === 'birthDoula' ? <BirthDoulaSurvey /> : <div />}
        {this.state.doulaType === 'postpartumDoula' ? <PostpartumDoulaSurvey /> : <div />}

      </Grid>
    );
  }
}

export default UserSurvey;
