import styles from './Landing.module.scss'
import Typist from 'react-text-typist';
import Link from 'next/link'
import { motion } from 'framer-motion'
import logo from '../../components/logoLink'


const Bio = () => {

    return(
            <motion.div exit={{opacity:1, y:500}} transition={{ duration:1}} initial='hidden' animate='visible' variants={{
                hidden:{
                    opacity:0,
                },
                visible:{
                    opacity:1,
                    }
            }} className={styles.container}>
                <div className={styles.introduction}>
                    <h1><Typist sentences={['HI!', 'Hello!', 'Kumusta!']} loop={true}/></h1>
                </div>
                <div className={styles.icons}>
                        {logo.map((item, index) => (
                            <motion.li whileHover={{scale:1.2}} key={index}><Link href={item.path}>{item.logo}</Link></motion.li>
                        ))}
                </div>
            </motion.div>
    )
}

export default Bio