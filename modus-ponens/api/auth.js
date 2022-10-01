import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
 } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = process.env.FIREBASE_CONFIG

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function updateUserProfile(displayName, photoURL){
  var newDetails = {}
  if(displayName != null) newDetails["displayName"] = displayName;
  if(photoURL != null) newDetails["photoURL"] = photoURL;

  updateProfile(auth.currentUser, newDetails)
  .then((res) => {
      console.log(res);
      return res;
  }).catch((error) => {
      console.log(error);
  });
}

export function signup(email, password, displayName, photoURL){
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      const user = userCredential.user;
      updateUserProfile(displayName, photoURL)
  })
  .then(()=>{login(email, password)})
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    return errorMessage;
});
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
  // onAuthStateChanged(auth, (user) => {
  //     if (user) {    
  //       return user['displayName']
  //     } else {
  //       console.log("null")
  //       return null; 
  //     }
  //   });
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
