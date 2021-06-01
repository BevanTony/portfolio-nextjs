import Head from 'next/head'
import { useRef, useState} from 'react'
import styles from '../styles/Home.module.scss'
import Bio from '../components/Bio/Bio'
import ArrowDown from '../components/ArrowDown'
import SkillSection from '../components/Skills'

import SkillSet from '../components/Skills/Skillset'
import { motion, scrollYProgress, AnimatePresence, useTransform, useViewportScroll} from 'framer-motion'
import { Link as Scroll } from 'react-scroll'

export default function Home() {
  const { scrollYProgress } = useViewportScroll()
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [0, .5, 1])
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100])
  
  return (
    <div >
      <Head>
        <title>Bevan Tony Medrano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div>

      <main className={styles.main}  >
        <div> 
        <motion.div initial='hidden' animate='visible' variants={{
          hidden:{
            scale:.5,
            opacity:0
          },
          visible:{
            opacity:1,
            scale:1,
            transition:{
              delay:.5
            }
          }
        }}>
          <Bio headshot='/DPTwitter.jpeg' 
            name='Bevan Tony Medrano' 
            role='FrontEnd Web Developer'
            email='medranobevantony@gmail.com'/>
        </motion.div>
        </div>
        <Scroll to='skill-section' smooth={true}>
          <ArrowDown/>
        </Scroll>
      </main>
      <motion.div
      style={{
        scale: scaleAnim,
        // y: yPosAnim,
      }}
    >
          <SkillSection id='skillsection'/>
        </motion.div>

    </div>
    </div>
  )
}
