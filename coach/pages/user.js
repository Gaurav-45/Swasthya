import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Profile from '../components/Profile'

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
          <Profile/>
        </div>
      </div>
      
    </div>
  )
}
