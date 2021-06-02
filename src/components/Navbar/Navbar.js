import styles from './Navbar.module.scss'
import pages from './navbarPages'

const Navbar = () => {

    return(
        <div className={styles.navbar}>

            <div className={styles.navbarContent}>

                <div className={styles.navbarlogo}>
                    <span>BevanTony</span>
                </div>

                <div className={styles.navbarpages}>
                        {pages.map((page, index) => (
                            <div key={index}>
                                <li>{page.icon} {page.label}</li>
                            </div>
                            ))}
                </div>

                <div className={styles.navbarmeta}>

                </div>
            </div>
        </div>
    )
}

export default Navbar