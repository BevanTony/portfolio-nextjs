import styles from './Bio.module.scss'

const Bio = ({name, role}) => {
    return(
        <div className={styles.bio}>
            <div>
                {name}
            </div>
            <div>
                {role}
            </div>
        </div>
    )
}

export default Bio