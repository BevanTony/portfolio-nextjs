import styles from './Contact.module.scss'

const Contact = () => {
    return(
        <div>
            <div className={styles.container}>
                
                <div className={styles.title}>
                    <h1>Contact Me</h1>
                </div>

                <form name='contact' method='POST' data_netlify='true' >
                    <div className={styles.contactDetails}>
                        <input type='text' placeholder='Name' name='name'></input>
                        <input type='text' id='email' placeholder='Email' name='email'></input>
                    </div>

                    <textarea id='message' name='message'></textarea>
                    <br/>
                    <button type='submit'>Send</button>
                </form>
                </div>    
        </div>
    )
}

export default Contact