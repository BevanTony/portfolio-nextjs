import styles from './Skills.module.scss'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import skills from '../../components/skillList'
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
            <div className={styles.experienceContainer}>
                {experience.map((item, index) => (
                    <div className={styles.exp}>
                        <h2>{item.position}</h2>
                        <h2><span>{item.company}</span></h2>
                        <h2>{new Date(item.date).toDateString()}</h2>
                    </div>
                ))}
            </div>
            
            <div className={styles.skillContainer}>
                {skills.map((item,index) => (
                        <img src={item.logo}/>
                ))}
            </div>

        </div>
    )
}

export default Skills