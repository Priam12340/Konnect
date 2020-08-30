import { combineReducers } from 'redux';
import authReducer from './auth';

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'; // <- needed if using firestore

const rootReducer = combineReducers({
  firebaseReducer,
  firestoreReducer,
  authReducer
});
 
export default rootReducer;