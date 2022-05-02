import React from 'react'
import styles from '../styles/WalletCard.module.css'
import Image from 'next/image'
import rupee from '../public/rupee.png'

const WalletCard = () => {
  return (
    <div className={styles.card}>
        <div className={styles.balance}>
            <p className={styles.subtitle}>Total Earnings</p>
            <p className={styles.rupees}>Rs. 1000</p>
        </div>
        <div className={styles.name}>
            <p>Gaurav Parulekar</p>
        </div>
        <div className={styles.logo}>
            <Image
                src={rupee}
                width='100'
                height='100'
            />
        </div>
    </div>
  )
}

export default WalletCard