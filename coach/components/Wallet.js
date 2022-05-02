import React from 'react'
import styles from '../styles/Wallet.module.css'
import WalletCard from './WalletCard'

const Wallet = () => {
  return (
    <div className={styles.wallet}>
        <WalletCard/>

        <div className={styles.history}>
            <h1>Transaction history</h1>
            <table>
              <tr className={styles.tableHeading}>
                <th>User name</th>
                <th>Date</th>
                <th>Amount(Rs)</th>
              </tr>
              <tr>
                <th>Gaurav Parulekar</th>
                <th>26-04-2022</th>
                <th>300</th>
              </tr>
              <tr>
                <th>Gaurav Parulekar</th>
                <th>26-04-2022</th>
                <th>300</th>
              </tr>
              <tr>
                <th>Gaurav Parulekar</th>
                <th>26-04-2022</th>
                <th>300</th>
              </tr>
              <tr>
                <th>Gaurav Parulekar</th>
                <th>26-04-2022</th>
                <th>300</th>
              </tr>
              <tr>
                <th>Gaurav Parulekar</th>
                <th>26-04-2022</th>
                <th>300</th>
              </tr>
            </table>
        </div>
        
    </div>
  )
}

export default Wallet