import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utils'

const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("about/aboutImage.png")} alt="I am working."
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorImage.png")} alt="Cursor" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>I'm a frontend and mobile app developer with experience in building
                                responsive and optimized websites and applications.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverimage.png")} alt="server" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend developer</h3>
                            <p>Experienced in building fast, scalable, and secure backend systems and APIs. </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/android.png")} alt="android" className={styles.smallIcon} />

                        <div className={styles.aboutItemText}>
                            <h3>Android Developer</h3>
                            <p>
                                I have experience developing native Android apps using Java and Kotlin, focusing on performance and seamless user experience.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About
