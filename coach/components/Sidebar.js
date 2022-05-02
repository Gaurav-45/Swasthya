import React from 'react'
import styles from '../styles/Sidebar.module.css';
import AddIcon from '@material-ui/icons/Add';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
        <div className={styles.nav}>
            <div className={`${styles.item} ${styles.newClass}`} >
                <p><AddIcon/> <span>New class</span> </p>
            </div>
            <div className={styles.item}>
                <p><PersonOutlineOutlinedIcon/> <span>My profile</span></p>
            </div>
            <div className={styles.item}>
                <p><AccountBalanceWalletOutlinedIcon/> <span>My wallet</span></p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar