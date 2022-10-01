/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {

    FIREBASE_CONFIG :{
      apiKey: "AIzaSyD7D8p_tpGw9iH1QZUFEo43ir2kR8XtR0g",
      authDomain: "modusponens-11bff.firebaseapp.com",
      databaseURL: "https://modusponens-11bff-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "modusponens-11bff",
      storageBucket: "modusponens-11bff.appspot.com",
      messagingSenderId: "235677406886",
      appId: "1:235677406886:web:3e79f1bdc3d26044f54667",
      measurementId: "G-Q0GNNYL8R2"
    }
  },
}
module.exports = nextConfig;
