import styles from './Landing.module.scss'
import Typist from 'react-text-typist';
import { motion } from 'framer-motion'

const Bio = () => {
    return(
            <motion.div exit={{opacity:1, y:500}} transition={{ duration:1}} initial='hidden' animate='visible' variants={{
                hidden:{
                    opacity:0,
                    scale:0,
                },
                visible:{
                    opacity:1,
                    scale:1,
                    }
            }} className={styles.container}>
                <div className={styles.introduction}>
                    <h1><Typist sentences={['HI!', 'Hello!', 'Kumusta!']} loop={true}/></h1>
                </div>
            </motion.div>
    )
}

export default Bio