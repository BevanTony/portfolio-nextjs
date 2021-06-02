import styles from './Bio.module.scss'
import Image from 'next/image'
import { GrMail } from 'react-icons/gr'


const Bio = ({headshot, name, role, email}) => {

    return(
        <div className={styles.bio}>

            <div className={styles.bioImageComponent}>
                <img src={headshot} alt={`headshot of ${name}`}/>
            </div>

                <div className={styles.metaComponent}>
                    <div className={styles.bioNameComponent}>
                        {name}
                    </div>
                    <div className={styles.bioRoleComponent}>
                        {role}
                    </div>
                    <div className={styles.bioEmailComponent}>
                        <GrMail/>                    
                        {email}
                    </div>
                </div>
        </div>
    )
}

export default Bio