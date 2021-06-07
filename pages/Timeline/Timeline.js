import styles from './Timeline.module.scss'
import expList from '../../components/expList'

function Timeline(){
  
    return(
    <div className={styles.container}>
        <ul>
            {expList.map((item, index) => (
                <p key={index}>{item.position} @ {item.company} <br/> {item.date}</p>
            ))}
        </ul>            
    </div>
    )
}

export default Timeline