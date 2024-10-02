import React from 'react'
import skills from '../../data/Skills.json'
import experience from '../../data/History.json'
import { getImageUrl } from '../../utils'
import styles from './Experience.module.css'
const Experience = () => {
  return (
     <section className={styles.container} id='experience'>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id)=>{
                    return(
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                        <img src={getImageUrl(skill.imageSrc)} alt="skills" />
                        </div>
                        <p>{skill.title}</p>
                        </div> 
                         );
                    })}
                    </div>
                    <ul className={styles.experience}>
                        {experience.map((exprinceItem,id)=>{
                                return(
                                    <li key={id}className={styles.experienceItem}>
                                        <img 
                                        src={getImageUrl(exprinceItem.imageSrc)} alt={`${exprinceItem.organisation} Logo`} />
                                   <div className={styles.experienceItemDetails}>
                                    <h3>{`${exprinceItem.role},${exprinceItem.organisation}`}</h3>
                                    <p>{`${exprinceItem.startDate}, - ${exprinceItem.endDate}`}</p>
                                    <ul>
                                        {exprinceItem.experiences.map((experience,id)=>{
                                        return <li key={id}>{experience}</li>;
                                            
                                        })}
                                    </ul>
                                   </div>
                                    </li>
                                    
                                );
                            })}
                    </ul>
        </div>
    </section>
  )
}

export default Experience
