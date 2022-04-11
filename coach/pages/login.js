import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/login.module.css'
import Link from 'next/link'
import google from '../public/google.svg';
import {useRouter} from 'next/router'
import { firebaseApp } from '../config/firebaseApp'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux';
import {sessionState} from '../actions/index';

const Login = () => {

    const router = useRouter();
    const dispatch = useDispatch();

    const [creds, setCreds] = useState({
        identifier:"",
        password:""
    })

    const authentication = getAuth();
    
    //noraml email pass
    const handleLogin=(e)=>{
        e.preventDefault();
    
        signInWithEmailAndPassword(authentication, creds.identifier, creds.password)
        .then((response) => {
            console.log(response);
            const firebaseUid = response.user.uid

            axios.post("http://localhost:8800/coach/present", {params : {firebaseUid : firebaseUid}})
            .then((response) => {
                if(response.data.present){
                    dispatch(sessionState(response.data.coach))
                    router.push('/')
                }
                else{
                    router.push('/register')
                    window.alert("Please register first")
                }
            })
            .catch((err) => console.log(err))
            
        })
        .catch((err) => {window.alert("Invalid username or password please try again")})
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
                    </form>
                    <p className={styles.subtitle}>Don't have an account? <Link href="/register"><a>Sign-up</a></Link></p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login