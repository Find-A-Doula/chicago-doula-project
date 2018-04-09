import React, { Component } from 'react';
import CTAForm from '../../components/CTAForm';
import './home.css';
import axios from 'axios';

class Home extends Component {
  state = {
    userEmail: '',
    showCTA: true
  };

  handleFormSubmit = event => {
    event.preventDefault();

    // Post email to ctaemails collection
    axios
      .post('/cta', { email: this.state.userEmail })
      .then(this.setState({ showCTA: false }))
      .catch(error => {
        console.log(error.response);
      });
  };

  handleInputChange = event => {
    // Get the name and value from event.target
    // Set state with new value
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="landing-page">        <Col xs={12}>
      <Row start="xs">
        <Col xs={6} />
        <div className="logo">
        logo goes here and centered
        </div>
      </Row>
      <Row>
        Doula is ____________
      </Row>
    </Col>
        <h1>Chicago Doula Project</h1>
        {this.state.showCTA ? (
          <CTAForm
            userEmail={this.state.userEmail}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
          />
        ) : (
          <div id="CTAconfirmation">
            <h3>Thank you! We will be in touch!</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Home;
