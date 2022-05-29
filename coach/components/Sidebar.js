import React, { useState } from 'react'
import styles from '../styles/Sidebar.module.css';
import AddIcon from '@material-ui/icons/Add';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import NewClass from './NewClass';

const Sidebar = () => {

    const [classModal, setClassModal] = useState(false);

    const handleClick = (e) => {
        setClassModal(prev => !prev)
    }

    return (
        <div className={styles.sidebar}>
            {classModal && <NewClass setClassModal={setClassModal} />}
            <div className={styles.nav}>
                <div className={`${styles.item} ${styles.newClass}`} onClick={handleClick}>
                    <p><AddIcon /> <span>New class</span> </p>
                </div>
                <div className={styles.item}>
                    <p><PersonOutlineOutlinedIcon /> <span>My profile</span></p>
                </div>
                <div className={styles.item}>
                    <p><AccountBalanceWalletOutlinedIcon /> <span>My wallet</span></p>
                </div>
            </div>
        </div >
    )
}

export default Sidebar