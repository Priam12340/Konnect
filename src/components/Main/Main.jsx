import React, { useEffect } from "react";
import Home from "../Home/Home";
import SignUpLogin from "../SignUpLogin/SignUpLogin";

import { connect } from "react-redux";

const Main = ({ auth }) => {

  useEffect(() => {
    navigator.permissions.query({name:'geolocation'}).then(function(result) {
      if (result.state === 'granted') {
        console.log('Permission ', result.state);
      } else if (result.state === 'prompt') {
        console.log('Permission ', result.state);
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