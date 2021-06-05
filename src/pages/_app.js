import '../styles/globals.scss'
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
