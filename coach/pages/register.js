import React, { useState } from 'react'
import Image from 'next/image'
import styles from '../styles/register.module.css'
import Link from 'next/link'
import registerImage from '../public/register.png'
import google from '../public/google.svg';
import {useRouter} from 'next/router'
import { firebaseApp } from '../config/firebaseApp'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import axios from 'axios'

const Register = () => {

    const router = useRouter();

    const [creds, setCreds] = useState({
        name : "",
        identifier:"",
        password:""
    })

    const authentication = getAuth();

    const register = e =>{
        e.preventDefault();

        createUserWithEmailAndPassword(authentication, creds.identifier, creds.password)
        .then((response) => {
            const firebaseUid = response.user.uid
            const email = response.user.email
            const name = creds.name

            axios.post("https://swasthya-backend.herokuapp.com/coach/present", {params : {firebaseUid : firebaseUid}})
            .then((response) => {
                if(response.data.present){
                    console.log("Already Present")
                    router.push('/')
                }
                else{
                    const body = {email : email, name : name, firebaseUid : firebaseUid}

                    axios.post("https://swasthya-backend.herokuapp.com/coach", body)
                    .then((response) => {
                        router.push('/login')
                    })
                    .catch(err =>  console.log(err))
                }
            })
            .catch((err) => console.log(err))
        })
        .catch(err => console.log(err))
    }

  return (
    <div className={styles.login}>
        <div className={styles.container}>
            <div className={styles.sidehug}>
                <div className={styles.signIn}>
                    <form onSubmit={register}  className={styles.form}>
                        <h3 className={`${styles.center} ${styles.heading}`}>Register</h3>
                        <div className={styles.element}>
                            <label>Name</label>
                            <input onChange={(e)=>setCreds({...creds, name:e.target.value})} type="text" name="name" id="name" value={creds.name} placeholder='Name' />
                        </div>
                        <div className={styles.element}>
                            <label>Email</label>
                            <input onChange={(e)=>setCreds({...creds, identifier:e.target.value})} type="text" name="username" id="username" value={creds.username} placeholder='Email' />
                        </div>
                        <div className={styles.element}>
                            <label>Password </label>
                            <input onChange={(e)=>setCreds({...creds, password:e.target.value})} type="password" name="password" id="password" value={creds.password} placeholder='Password'/>
                        </div>
                        <div className={styles.center}>
                            <input type='submit' value='Register' className={styles.btn}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register