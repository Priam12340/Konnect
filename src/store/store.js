import rootReducer from '../reducers';
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "../services/firebase";
 

const createStoreWithFirebase = compose(reactReduxFirebase(firebase))(createStore);

const store = createStoreWithFirebase(rootReducer,{},applyMiddleware(reduxThunk));
 
export default store;
