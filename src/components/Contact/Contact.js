import styles from './Contact.module.scss'

const Contact = () => {
    return(
        <div>
      <form name="contact" method="POST" data-netlify="true">
        <p>
            <input type="text" name="name" />
        </p>
        <p>
           <input type="email" name="email" />
        </p>
        <p>
            <textarea name="message"></textarea>
        </p>
        <p>
            <button type="submit">Send</button>
        </p>
        </form>  
        </div>
    )
}

export default Contact