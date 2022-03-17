import React, { useState } from 'react'
import loginImage from '../public/login.png'
import Image from 'next/image'
import styles from '../styles/login.module.css'
import Link from 'next/link'
import google from '../public/google.svg';
import facebook from '../public/facebook.svg'
import {useRouter} from 'next/router'
import { firebaseApp } from '../config/firebaseApp'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const router = useRouter();

    const [creds, setCreds] = useState({
        identifier:"",
        password:""
    })

    const handleLogin=(e)=>{
        e.preventDefault();
        console.log(creds)
    }

  return (
    <div className={styles.login}>
        <div className={styles.container}>
            <div className={styles.sidehug}>
                <img className={styles.image} src="https://vinron.in/wp-content/uploads/2021/06/Fitnessillustration.png" alt="" />
            </div>
            <div className={styles.sidehug}>
                <div className={styles.signIn}>
                    <form onSubmit={handleLogin}  className={styles.form}>
                        <h3 className={`${styles.center} ${styles.heading}`}>Login</h3>
                        <div className={styles.element}>
                            <label>Email</label>
                            <input onChange={(e)=>setCreds({...creds, identifier:e.target.value})} type="text" name="username" id="username" value={creds.username} placeholder='Email' />
                        </div>
                        <div className={styles.element}>
                            <label>Password </label>
                            <input onChange={(e)=>setCreds({...creds, password:e.target.value})} type="password" name="password" id="password" value={creds.password} placeholder='Password'/>
                        </div>
                        <div className={styles.center}>
                            <input type='submit' value='Login' className={styles.btn}/>
                        </div>
                        <div className={styles.orDivider}>
                            <hr/>
                                <span>OR</span>
                            <hr/>
                        </div>
                        <div className={styles.thirdParty}>
                            <button className={styles.authBtn}><Image src={google} alt="google-logo" height={25}/>Sign in using Google</button>
                            {/* <button className={styles.authBtn}><Image src={facebook} alt="facebook-logo" height={25}/>Sign in using Facebook</button> */}
                        </div>
                    </form>
                    <p className={styles.subtitle}>Don't have an account? <Link href="/register"><a>Sign-up</a></Link></p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login