import { auth } from "./firebase";

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async(email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
};

export const doSignInWithGoogle = async() => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  //result.user then save it to firestore to store users information
  return result;
};

export const doSignOut = () => {
  return signOut(auth);
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordUpdate = (password) => {
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = ()=>{
  return sendEmailVerification(auth.currentUser,
  {url: '${window.location.origin}/home',} );
};