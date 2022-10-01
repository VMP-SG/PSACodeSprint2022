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

export function login(email, password){
  signInWithEmailAndPassword(auth, email, password)
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
  });
}

export function getUserData(){
  onAuthStateChanged(auth, (user) => {
      if (user) {    
        return user['displayName']
      } else {
          return null; 
      }
    });
}

export function logout(){
    signOut(auth).then(() => {
      console.log("SignedOut")
      return signout; 
    }).catch((error) => {
      return error;
    });
}
