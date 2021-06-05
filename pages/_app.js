import '../styles/globals.scss'
import '../styles/Home.module.scss'
import Navbar from './Navbar/Navbar'
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
