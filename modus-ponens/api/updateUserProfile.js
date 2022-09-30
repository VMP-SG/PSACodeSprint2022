const axios = require("axios").default;
const API_KEY = process.env.API_KEY


export default function updateUserProfile(idToken, displayName, photoUrl){
    const updateUserProfileURL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`
    var missingAttrs = [];
    if (displayName == "" ) missingAttrs.push("DISPLAY_NAME");
    if (photoUrl == "") missingAttrs.push("PHOTO_URL");
    const params = {
        idToken: idToken,
        displayName: displayName,
        photoUrl: photoUrl,
        deleteAttribute: missingAttrs,
        returnSecureToken: true
    }
    axios.post(updateUserProfile,params)
    .then( res => {
        return (res['data']['idToken'], res['data']['refreshToken'])
    })
    .catch(err=>{
        console.log(err)
    })

}