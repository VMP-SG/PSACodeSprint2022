import MainFooter from '../components/Layout/MainFooter'
import MainHeader from '../components/Layout/MainHeader'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainHeader/>
      <Component {...pageProps} />
      <MainFooter/>
    </>
    
    )
}

export default MyApp
