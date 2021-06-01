import styles from './Skills.module.scss'

const Skills = (props) => {
    console.log(props.skillset)
    return(
        <div className={styles.mainContainer} id='skill-section'>
            <div className={styles.title}>
                <h1>Skills & Tools</h1>
            </div>

            <div className={styles.skillColumn}>
                {props.skillset.map((skill, index) => (
                    <div className={styles.col}>
                        <img key={index} src={skill.image} alt="churvaness" />   
                    </div>
                ))}
         
            </div>
        </div>
    )
    }

export default Skills