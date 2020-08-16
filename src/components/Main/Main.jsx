import React from "react";
import Home from "../Home/Home";
import SignUpLogin from "../SignUpLogin/SignUpLogin";

import { connect } from "react-redux";

const Main = ({ auth }) => {
  console.log("Showing auth", auth);
  return(
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