// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./store/reducers/rootReducer";
// import thunk from "redux-thunk"; //its a middleware

// import {
//   createFirestoreInstance,
//   reduxFirestore,
//   getFirestore,
// } from "redux-firestore";
// import {
//   ReactReduxFirebaseProvider,
//   getFirebase,
//   isLoaded,
// } from "react-redux-firebase";
// import fbConfig from "./config/fbConfig";
// import firebase from "firebase/app";

// import { useSelector } from "react-redux";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reduxFirestore(fbConfig)
//   )
// );

// const rrfConfig = {
//   userProfile: "users",
//   useFirestoreForProfile: true,
//   enableRedirectHandling: false,
//   restBeforeLogin: false,
// };
// const rrfProps = {
//   firebase,
//   config: fbConfig,
//   config: rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance,
//   userProfile: "users", //where profiles are stored in database
//   presence: "presence", // where the list if online userss is stores in database
//   sessions: "sessions",
// };

// function AuthIsLoaded({ children }) {
//   const auth = useSelector((state) => state.firebase.auth);
//   if (!isLoaded(auth)) return <div>Loading Screeen...</div>;
//   return children;
// }

// ReactDOM.render(
//   <Provider store={store}>
//     <ReactReduxFirebaseProvider {...rrfProps}>
//       <AuthIsLoaded>
//         <App />
//       </AuthIsLoaded>
//     </ReactReduxFirebaseProvider>
//   </Provider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      userProfile: "users",
      useFirestoreForProfile: true,
      attachAuthIsReady: true,
    }),
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

//compose contains store enhancers
