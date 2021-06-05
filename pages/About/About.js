import { useRef } from 'react'
import styles from './About.module.scss'
import { motion, useTransform, useViewportScroll } from 'framer-motion'
import Typist from 'react-typist';

function About(){

    const ref = useRef();

    const { scrollYProgress, scrollY } = useViewportScroll()
    const yName = useTransform(scrollYProgress, [0,.5], [0,50])
    const opacityName = useTransform(scrollYProgress, [0,.5, 1], [1,0,0])

    const yWebDeveloper = useTransform(scrollYProgress, [0,.7, 1], [-150,-100, -25])
    const opacityWebDeveloper = useTransform(scrollYProgress, [0,.5, 1], [0,1,0])

    const yProgammer = useTransform(scrollYProgress, [0,1], [-200, -100])
    const opacityProgrammer = useTransform(scrollYProgress, [.7, 1], [0,1])
    return(
        <>
            <div className={styles.container}>

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
                    

                className={styles.aboutme}>
                    <motion.div style={{
                        y:scrollY,
                    }}>
                        <h1>I AM,</h1>
                        <motion.h1 style={{y:yName, opacity:opacityName}}>Bevan Tony Medrano.</motion.h1>
                        <motion.h1 style={{y:yWebDeveloper, opacity:opacityWebDeveloper}}> A Web Developer.</motion.h1>
                        <motion.h1 style={{y:yProgammer, opacity:opacityProgrammer}}> A Programmer.</motion.h1>

                    <Typist>
                        <h2>About Me:</h2>
                        <h2>I'm a self taught web developer/designer in the many islands of the philippines. <br/>
                        I enjoy the process of creating simple and elegant looking websites.</h2>
                    </Typist>
                    </motion.div>
                </motion.div>

            </div>
        </>
    )
}
export default About


