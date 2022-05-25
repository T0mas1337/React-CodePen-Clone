import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {BrowserRouter} from "react-router-dom";

firebase.initializeApp({
    apiKey: "AIzaSyCs1EFUGlDFVCbVZW4c1XNOQBTbUkjXTTI",
    authDomain: "web-learning-6bbf3.firebaseapp.com",
    projectId: "web-learning-6bbf3",
    storageBucket: "web-learning-6bbf3.appspot.com",
    messagingSenderId: "301881069490",
    appId: "1:301881069490:web:1cf285e79f23a64bb89eab",
    measurementId: "G-MHK3VNPTSR"
});

export const Context = createContext(null)

const auth = firebase.auth();
const firestore = firebase.firestore();

ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <React.StrictMode>
            <BrowserRouter>
            <App />
            </BrowserRouter>
        </React.StrictMode>
    </Context.Provider>,
  document.getElementById('root')
);
