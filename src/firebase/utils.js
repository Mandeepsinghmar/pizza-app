import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
provider.setCustomParameters({
  prompt: "select_account",
});
export async function loginWithGoogle() {
  try {
    const result = await auth.signInWithPopup(provider);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
