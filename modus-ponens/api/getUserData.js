const axios = require("axios").default;
const API_KEY = process.env.API_KEY



export default function getUserData(idToken){
    const userDataUrl = `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${API_KEY}`
   
    const params = {
        idToken: idToken
    }
    axios.post(updateUserProfile,params)
    .then( res => {
        return (res['data']['users'][0])
    })
    .catch(err=>{
        console.log(err)
    })

}
