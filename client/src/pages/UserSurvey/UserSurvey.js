import React, { Component } from 'react';
import './user-survey.css';
import Checkbox from 'react-toolbox/lib/checkbox';
import { Card, CardTitle } from 'react-toolbox/lib/card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { BirthDoulaSurvey, PostpartumDoulaSurvey } from '../../components/Surveys';

class UserSurvey extends Component {
  state = {
    // Doula Type
    birthDoula: false,
    postpartumDoula: false
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
              <Row center="xs">
                <Card style={{ width: '450px', backgroundColor: '#f2ece3', marginTop: '200px' }}>
                  <CardTitle title="I am looking for a:" />

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
                </Card>
              </Row>
            </div>
          : <div />}

        {this.state.birthDoula ? <BirthDoulaSurvey /> : <div />}
        {this.state.postpartumDoula ? <PostpartumDoulaSurvey /> : <div />}

      </Grid>
    );
  }
}

export default UserSurvey;
