import React, { Component } from 'react';
import { Row } from 'react-flexbox-grid';
import CTAForm from '../../components/CTAForm';
import ButtonLearn from '../../components/ButtonLearn';
import ButtonSignUp from '../../components/ButtonSignUp';
import { Link } from 'react-router-dom';
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
    axios.post('/cta', { email: this.state.userEmail }).then(this.setState({ showCTA: false })).catch(error => {
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
      <div className="landing-page">

        <Row center="xs">
          <div>

            <img className="logo" width="700px" padding="20px" src="/images/CDP_LOGO_MAIN.png" alt="logo" />

          </div>
        </Row>
        <Row center="xs" style={{ marginTop: '40px' }}>
          {this.state.showCTA
            ? <CTAForm
                userEmail={this.state.userEmail}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            : <div id="CTAconfirmation">
                <h3>Thank you! We will be in touch!</h3>
              </div>}
        </Row>
        <Row center="xs">

          <Link to="/learn">
            <ButtonLearn />
          </Link>
          <Link to="/search">
            <ButtonSignUp handleFormSubmit={this.handleButtonSignUp} />
          </Link>

        </Row>
      </div>
    );
  }
}

export default Home;
