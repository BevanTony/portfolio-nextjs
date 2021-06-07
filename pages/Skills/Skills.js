import styles from './Skills.module.scss'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import frontend from '../../components/frontendList'
import backend from '../../components/backendList'

import experience from '../../components/expList'


function Skills(props){

    const [isVisible, setIsVisible] = useState(false)
    useEffect(() => {
        triggerSection()
    })

    const triggerSection = () => {
        if(props.currentYPos > .3){
            setIsVisible(true)
        }
    }


    return(
        <div className={styles.container}>
            <div className={styles.skillContainer}>
                {backend.map((item,index) => (
                        <motion.img whileHover={{scale:1.1}} transition={{duration:.6}} key={index} src={item.logo}/>
                ))}
            </div>
            
            <div className={styles.skillContainer}>
                {frontend.map((item,index) => (
                        <motion.img whileHover={{scale:1.1}} transition={{duration:.6}} key={index} src={item.logo}/>
                ))}
            </div>

        </div>
    )
}

export default Skills