import styles from './Navbar.module.scss'
import pages from './navbarPages'
import Link from 'next/link'
import {motion } from 'framer-motion'


const Navbar = () => {

    const list = {visible:{opacity:1}, hidden:{opacity:0} }
    const item ={ visible:{opacity:1, y:0, transition:{duration:1}}, hidden:{opacity:1, y:-100}}
    

    return(
        <motion.div className={styles.navbar}>

            <div className={styles.navbarContent}>

                <div className={styles.navbarlogo}>
                    <Link href='/'><span>BevanTony</span></Link>
                </div>

                <motion.ul initial='hidden' animate='visible' variants={list}>
                    <motion.div  className={styles.navbarpages}>
                            {pages.map((page, index) => (
                                    <Link key={index} href={page.path}>
                                            <motion.li  variants={item}>{page.icon} {page.label}</motion.li>
                                        </Link>
                                ))}
                    </motion.div>
                </motion.ul>

            </div>
        </motion.div>
    )
}

export default Navbar