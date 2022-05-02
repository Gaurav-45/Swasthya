import React from 'react'
import styles from '../styles/HomeScreen.module.css'
import MyClass from './MyClass'

const HomeScreen = () => {
  return (
    <div className={styles.home}>
        <h1>My upcoming classes</h1>
        <div className={styles.day}>
            <p>15th April 2022</p>
            <div className={styles.classes}>
                <MyClass/>
                <MyClass/>
            </div>
        </div>
        <div className={styles.day}>
            <p>16th April 2022</p>
            <div className={styles.classes}>
                <MyClass/>
            </div>
        </div>
        <div className={styles.day}>
            <p>16th April 2022</p>
            <div className={styles.classes}>
                <MyClass/>
            </div>
        </div>
        <div className={styles.day}>
            <p>16th April 2022</p>
            <div className={styles.classes}>
                <MyClass/>
            </div>
        </div>
        <div className={styles.day}>
            <p>16th April 2022</p>
            <div className={styles.classes}>
                <MyClass/>
            </div>
        </div>
    </div>
  )
}

export default HomeScreen