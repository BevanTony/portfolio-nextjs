import '../styles/globals.scss'
import '../components/Landing/Landing.module.scss'
import './About/About.module.scss'
import Navbar from '../components/Navbar/Navbar'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return(
    <>
    <Navbar/>
    <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  ) 
}

export default MyApp
