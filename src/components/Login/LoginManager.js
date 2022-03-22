import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import firebaseConfig from './firebaseConfig';

export const initializeLoginApp = () =>{
    firebase.initializeApp(firebaseConfig);
}

export const createUserEmailPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        var newUserInfo = userCredential.user;
        newUserInfo.success = "User Created Successfull.";
        newUserInfo.error = '';
        return newUserInfo;
    })
    .catch((error) => {
        const newUserInfo = {};
        newUserInfo.success = '';
        newUserInfo.error = error.message;
        return newUserInfo;
    });
}

export const signInWithEmailPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        user.error = '';
        user.success = "Login Successfull."
        return user;
    })
    .catch((error) => {
        const newUserInfo = {};
        newUserInfo.success = '';
        newUserInfo.error = error.message;
        return newUserInfo;
    });
}