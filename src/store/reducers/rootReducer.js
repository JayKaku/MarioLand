import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux"; // to combine our reducers as the name suggests
import { firestoreReducer } from "redux-firestore"; // redux firestore is a premade reducer to sync our data in the bg from the firestore to our state, in the index.js file has the access to our fbConfig so it knows what database to connect to and knows how to access it
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
// we will have to tell the firestore reducer which data to sync
// now as we have made firestoreConnect in the dashboard componenet now it can sync that particular collection when that component is active
