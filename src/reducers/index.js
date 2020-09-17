import { combineReducers } from 'redux';
import authentication from './authentication';

import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore'; // <- needed if using firestore

const rootReducer = combineReducers({
  firebaseReducer,
  firestoreReducer,
  authentication
});
 
export default rootReducer;