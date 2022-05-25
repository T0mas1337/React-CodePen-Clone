import React, {useContext} from 'react';
import {useCollection} from "react-firebase-hooks/firestore";
import {Context} from "../../index";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useAuthState} from "react-firebase-hooks/auth";

import * as IoIcons from "react-icons/io";

const Login = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const loginIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    }


    return (
        <div>
            {!user ?
            <div onClick={loginIn}>Войти</div> :
            <div onClick={() => auth.signOut()}><IoIcons.IoIosExit/></div>
            }
        </div>
    );
};

export default Login;