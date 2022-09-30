const axios = require("axios").default;
const API_KEY = process.env.API_KEY


export function signup(email,password){
    const signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    const data = {
        email: "email",
        password: "password",
        returnSecureToken: true
    }
    
    axios.post(firebaseAuthURL, data)
    .then( res => {
        return (res['data']['idToken'], res['data']['refreshToken'])
    })
    .catch(err=>{
        console.log(err)
    })
}

export function signin(email, password){
    const signinURL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    const data = {
                email: email,
                password: password,
                returnSecureToken: true
    };
    axios.post(signinURL,data)
    .then((res) => {
        return (res['data']['idToken'], res['data']['refreshToken'])
    })
}




