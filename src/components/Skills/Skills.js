import styles from './Skills.module.scss'
import { motion } from 'framer-motion'

const Skills = (props) => {
    return(
        <div>
        <div className={styles.mainContainer} >
            <div className={styles.title}>
                <h1>Skills & Tools</h1>
            </div>

            <div className={styles.skillColumn}>
                {props.skillset.map((skill, index) => (
                    <motion.div whileHover={{
                        scale:[1, 1.5, 1.3],
                        transition:{
                            duration:.5,
                        }
                        
                    }} key={index} className={styles.col}>
                        <img  src={skill.image}/>   
                    </motion.div>
                ))}
         
            </div>
        </div>
        </div>
    )
    }

export default Skills