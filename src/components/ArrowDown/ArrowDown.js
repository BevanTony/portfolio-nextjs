import  styles from './ArrowDown.module.scss'
import Link from 'next/link'
import { AiOutlineArrowDown } from 'react-icons/ai'


const ArrowDown = () => {
    return(
        <div className={styles.arrowDownComponent}>
            <Link href={''}>
                <AiOutlineArrowDown/>
            </Link>
        </div>
    )
}

export default ArrowDown