import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';
import './styles/app.css';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />,
  </FirebaseContext.Provider>,
  document.getElementById('root'));


// client side rendered app: react (cra)
// -> database which is Firebase
// -> react-loading skeleton
// -> Styling: tailwind

// Folder Structure
  // -> components, constants, context, helpers, lib (firebase is going to live in here)
  // -> services (firebase functions in here)
  // -> Hooks
  // -> pages
  // -> styles (tailwind folder )
  // --> seed file for database intialize
