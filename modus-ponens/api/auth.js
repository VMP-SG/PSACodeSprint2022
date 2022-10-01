import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile
 } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = process.env.FIREBASE_CONFIG

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

async function updateUserProfile(displayName, photoURL){
  var newDetails = {}
  if(displayName != null) newDetails["displayName"] = displayName;
  if(photoURL != null) newDetails["photoURL"] = photoURL;

  try{
    const res = await updateProfile(auth.currentUser, newDetails);
    return res; 
  } catch (err){
    console.log(err)
  }
}


export async function signup(email, password, displayName, photoURL){
  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const newUserCredential = await updateUserProfile(displayName, photoURL);
    const loggedInUser =  await login(email, password);
    return loggedInUser;
  } catch (err) {
    console.log(err.message)
    return null;
  }
}

export async function login(email, password){
  try{
    const creds = await signInWithEmailAndPassword(auth, email, password)
    const user = creds.user['displayName']
    return user;
  } catch(e){
    console.log(e.message);
    return null;
  }
}


export  function getUserData(){
  return  auth.currentUser;
}

export function logout(){
    signOut(auth)
    .then(() => {
      console.log("Logged Out")
    }).catch((error) => {
      return error;
    });
}
