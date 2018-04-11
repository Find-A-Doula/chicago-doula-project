import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'
import CTAForm from '../../components/CTAForm';
import ButtonLearn from '../../components/ButtonLearn'
import ButtonSignUp from '../../components/ButtonSignUp'
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

  handleButtonLearn = event => {
    event.preventDefault();

    // Learn Button pressed, link to display

  };

  handleButtonSignUp = event => {
    event.preventDefault();

    // SignUp Button pressed, link to display

  };

  render() {
    return (
      <Grid fluid>
      <div className="landing-page">       
      
      <Row center="xs">
        <div >

        <h1>
        <img className="logo" height='200px' padding='20px' src="/images/CDP_LOGO_BIG-01.png">
        </img>
        </h1>

        </div>
      </Row>
      <Row center="xs">       
      </Row>

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
        <Row center="xs">

        <ButtonLearn 
        handleFormSubmit={this.handleButtonLearn}
        />  
        <ButtonSignUp 
        handleFormSubmit={this.handleButtonSignUp}
        /> 
  
        </Row>
      </div>
      
      </Grid>
    );
  }
}

export default Home;
