import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Nandini.module.css';
const Nandini = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nandini</h1>
        <p className={styles.description}>Full Stack Developer with 2 years of experience and 
        I build high-performance web and mobile applications focused on scalability, security, 
        and user engagement. Curious to know more? Scroll down and check my resume..</p>
       
        </div>
        <img 
        src={getImageUrl("nandini/nandiniImage.png")}
        alt="image of me" className={styles.profileImage}
        />
        
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  )
}

export default Nandini
//<a className={styles.contactBtn} href="">Resume</a>