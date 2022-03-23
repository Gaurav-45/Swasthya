import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.nav}>
        <div className={styles.logo}>Swasthya</div>
        <div className={styles.right}>
            {/* <div className={styles.search}>
                <input type="text" placeholder='Search' />
            </div> */}
            <div className={styles.user}>
                <img src="https://lh3.googleusercontent.com/ogw/ADea4I6fdtjkOOitsUPsUkVmX3WcWSwVxQDdU6p_2QMK=s32-c-mo" alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default Navbar