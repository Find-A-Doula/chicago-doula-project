import React, { Component } from 'react';
import CTAForm from '../../components/CTAForm';
import './home.css';

class Home extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="landing-page">
        <h1>Chicago Doula Project</h1>
        <CTAForm />
      </div>
    );
  }
}

export default Home;
