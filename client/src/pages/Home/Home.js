import React, { Component } from 'react';
import CTAForm from '../../components/CTAForm';
import './home.css';

class Home extends Component {
  state = {
    response: '',
    userEmail: '',
    showCTA: true
  };

  componentDidMount() {
    // API testing
    // this.callApi()
    //   .then(res => this.setState({ response: res.express }))
    //   .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ showCTA: false });
  };

  handleInputChange = event => {
    // Get the name and value from event.target
    // Set state with new value
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // API testing
  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();

  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // };

  render() {
    return (
      <div className="landing-page">
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
