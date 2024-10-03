import React from 'react';
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils'

const Contact = () => {
  return <footer  id="contact" className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl('contact/emailIcon.png')} alt='Email'/>
            <a href="mailto:patilnandini1811@gmail.com">patilnandini1811@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl('contact/linkedinIcon.png')} alt='Email'/>
            <a href="https://www.linkedin.com/in/nandini1811-developer//">linkdin.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl('contact/githubIcon.png')} alt='Email'/>
            <a href="https://github.com/patilnandini1811">github.com</a>
        </li>
    </ul>
  </footer>
}

export default Contact
