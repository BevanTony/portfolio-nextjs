import styles from './Contact.module.scss'

const Contact = () => {
    return(
        <div>
            <div className={styles.container}>
                
                <div className={styles.title}>
                    <h1>Contact Me</h1>
                </div>

                <form>
                    <div className={styles.contactDetails}>
                        <input placeholder='Name'></input>
                        <input placeholder='Email'></input>
                    </div>

                    <textarea>

                    </textarea>
                    <br/>
                    <button type='submit'>
                    Send
                    </button>
                </form>
                </div>    
        </div>
    )
}

export default Contact