import styles from './Contact.module.scss'

function Contact(){
    return(
    <div className={styles.container}>                
       <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
            <div className={styles.ContactContainer}>
                <div>
                    <label for='name'>Name</label>
                    <input type='text' id='name' ></input>
                </div>

                <div>
                    <label for='email'>Email</label>
                    <input type='text' id='email' ></input>
                </div>

                <div>
                    <textarea placeholder='Tell me anything :)' id='message'>
                    </textarea>
                </div>

                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>

    </div>
    )
}

export default Contact