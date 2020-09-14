import React, { Component } from "react";
import Home from "../Home/Home";
import SignUpLoginWithWidget from "../SignUpLogin/SignUpLoginWithWidget";
import { withOktaAuth } from '@okta/okta-react';

export default withOktaAuth(class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      authenticated: null,
      error: null,
      latitude: 0,
      longitude: 0
    };

    this.componentDidMount = this.componentDidMount.bind(this);
    this.success = this.success.bind(this);
    this.error = this.error.bind(this);
    this.revokePermission = this.revokePermission.bind(this);
  }


  success(pos) {
    let crd = pos.coords;
    let dateRetrieved = new Date(pos.timestamp);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    console.log(`Retrieved at ${dateRetrieved}`);
    this.setState({
      latitude: crd.latitude,
      longitude: crd.longitude
    });

  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  revokePermission() {
    navigator.permissions.revoke({ name: 'geolocation' }).then(function (result) {
      console.log('Permission ', result.state);
    });
  }

  componentDidMount() {
    let self = this;
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
    navigator.permissions.query({ name: 'geolocation' }).then(function (result) {
      if (result.state === 'granted') {
        console.log('Permission ', result);
        navigator.geolocation.getCurrentPosition(self.success, self.error, options);
      } else if (result.state === 'prompt') {
        console.log('Permission ', result.state);
        navigator.geolocation.getCurrentPosition(self.success, self.error, options);
      } else if (result.state === 'denied') {
        console.log('Permission ', result.state);
      }
      result.onchange = function () {
        console.log('Permission ', result.state);
      }
    });
  }

  render() {
    if (this.props.authState.isPending) return null;
    //eslint-disable-next-line no-unused-vars
    const button = this.props.authState.isAuthenticated ?
      <Home latitude={this.state.latitude} longitude={this.state.longitude} /> :
      <SignUpLoginWithWidget baseUrl='https://dev-634748.okta.com' />;
    return (
      <div>
        <Home latitude={this.state.latitude} longitude={this.state.longitude} /> :
        {/* {button} */}
      </div>
    );
  }

});
