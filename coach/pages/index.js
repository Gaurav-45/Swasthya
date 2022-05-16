import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HomeScreen from '../components/HomeScreen'
import Profile from '../components/Profile'
import Wallet from '../components/Wallet'
import NewClass from '../components/NewClass'

export default function Home() {

  const state = useSelector((state) => state.storeSession)

  console.log(state);

  return (
    <div className={styles.coach}>
      <Navbar/>
      <div className={styles.home}>
        <div className={styles.nav}>
          <Sidebar/>
        </div>
        <div className={styles.dashboard}>
          {/* <HomeScreen/> */}
          <Profile/>
          {/* <Wallet/> */}
          {/* <NewClass/> */}
        </div>
      </div>
      
    </div>
  )
}
