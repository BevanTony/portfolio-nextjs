import { useEffect, useState } from 'react'
import styles from './About.module.scss'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Skill from '../Skills/Skills'
import Contact from '../Contact/Contact'


function About(){

    const [yearsOfExp, setYearsOfExp] = useState(0)

    const [currentYPos, setCurrentYpos] = useState(0)
    const { scrollYProgress, scrollY } = useViewportScroll()

    useEffect(() => {
        getYearsOfExp()

        scrollYProgress.onChange((v) => setCurrentYpos(v))
    },[currentYPos])


    const aboutSecY = useTransform(scrollYProgress, [0, .3], [0, 400])

    const yName = useTransform(scrollYProgress, [0,.09], [0,50])
    const opacityName = useTransform(scrollYProgress, [0,.09, 1], [1,0,0])

    const yWebDeveloper = useTransform(scrollYProgress, [0,.21, .3], [-150,-100, -25])
    const opacityWebDeveloper = useTransform(scrollYProgress, [0,.21, .3], [0,1,0])

    const yProgammer = useTransform(scrollYProgress, [.21,.3], [-150, -100])
    const opacityProgrammer = useTransform(scrollYProgress, [.21, .3], [0,1])

    const getYearsOfExp = () => { 
        var start = new Date('09/01/18')
        var today = new Date()
        var exp = today.getFullYear() - start.getFullYear()
        setYearsOfExp(String(exp))
        
    }




    return(
        <>
            <div className={styles.aboutContainer}>

                <motion.div exit={{x:-1000, opacity:0}} transition={{ duration:1}} initial='hidden' animate='visible' variants={{
                hidden:{
                    opacity:0,
                },
                visible:{
                    opacity:1,
                    x:0

                },
                transition:{
                    duration:2
                }
                    }}
                    

                className={styles.textAboutMe}>
                    <motion.div style={{
                        y:aboutSecY,
                    }}>
                        <h1>I AM,</h1>
                        <motion.h1 style={{y:yName, opacity:opacityName}}>Bevan Tony Medrano.</motion.h1>
                        <motion.h1 style={{y:yWebDeveloper, opacity:opacityWebDeveloper}}> A Web Developer.</motion.h1>
                        <motion.h1 style={{y:yProgammer, opacity:opacityProgrammer}}> A Programmer.</motion.h1>
                        <h2>About Me:</h2>
                        <h2>I am a BSIT graduate in the philippines. I've been programming for {String(yearsOfExp)} years.
                         I enjoy the process of creating simple and elegant looking websites.</h2>
                    </motion.div>

                </motion.div>
          
                <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{ duration:2}} className={styles.imageAboutMe}>
                    <img src='/Me.jpg'/>
                </motion.div>
            </div>

            <div className={styles.skillsContainer}>
                <Skill/>
            </div>

            <div className={styles.contactContainer}>
                <Contact/>
            </div>
        </>
    )
}
export default About


