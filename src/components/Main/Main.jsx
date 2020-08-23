import React, { useEffect } from "react";
import Home from "../Home/Home";
import SignUpLogin from "../SignUpLogin/SignUpLogin";

import { connect } from "react-redux";

const Main = ({ auth }) => {

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    let crd = pos.coords;
    let dateRetrieved = new Date(pos.timestamp);
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    console.log(`Retrieved at ${dateRetrieved}`);

  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // function revokePermission() {
  //   navigator.permissions.revoke({name:'geolocation'}).then(function(result) {
  //     console.log('Permission ', result.state);
  //   });
  // }

  useEffect(() => {
    navigator.permissions.query({name:'geolocation'}).then(function(result) {
      if (result.state === 'granted') {
        console.log('Permission ', result.state);
      } else if (result.state === 'prompt') {
        console.log('Permission ', result.state);
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else if (result.state === 'denied') {
        console.log('Permission ', result.state);
      }
      result.onchange = function() {
        console.log('Permission ', result.state);
      }
    });
  });

  return (
    <div>
      {!auth.isEmpty ? <Home /> : <SignUpLogin />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Main);