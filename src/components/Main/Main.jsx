import React from "react";
import CreateAccount from "../AccountCreation/CreateAccount";
import SignUpLogin from "../SignUpLogin/SignUpLogin";
import { connect } from "react-redux";

const Main = ({ auth }) => {
  console.log("Showing auth", auth);
  return(
    <div>
      {!auth.isEmpty ? <CreateAccount /> : <SignUpLogin />}
    </div>  
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebaseReducer.auth
  };
}

export default connect(mapStateToProps)(Main);