import Layout from '../components/Layout'
import '../styles/globals.css'
import {useState,useMemo} from 'react';
import { UserContext } from '../UserContext'

function MyApp({ Component, pageProps }) {
  const [user,setUser] = useState(null);
  const providerValue = useMemo(()=>({user,setUser}),[user,setUser])

  return (
    <UserContext.Provider value={providerValue}>
      {/* <Layout> */}
        <Component {...pageProps} />
      {/* </Layout> */}
    </UserContext.Provider>

  )
}

export default MyApp
