import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Nandini.module.css';
const Nandini = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nandini</h1>
        <p className={styles.description}>Innovative Full Stack Developer with 2+ years of experience in React,
         Node.js, and AWS, building high-performance, scalable web and mobile applications.
         Passionate about crafting secure, user-focused solutions that drive engagement and efficiency.</p>
         <a className={styles.contactBtn} href="mailto:patilnandini1811@gmail.com">Contact me</a>
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
