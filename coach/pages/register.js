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
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

const Register = () => {

    const router = useRouter();

    const [creds, setCreds] = useState({
        name : "",
        identifier:"",
        password:"",
        phone:""
    })
    const [isError, setIsError] = useState(false);

    const authentication = getAuth();

    const register = e =>{
        e.preventDefault();

        if(isError){
            alert("Please enter the valid data");
        }

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
            <div className={`${styles.sidehug} ${styles.image}`}>
                <Image
                    src={registerImage}
                    alt="register"
                />
            </div>
            <div className={styles.sidehug}>
                <div className={styles.signIn}>
                    <form onSubmit={register}  className={styles.form} disabled={isError}>
                        <h3 className={`${styles.center} ${styles.heading}`}>Register</h3>
                        <div className={styles.element}>
                            <label>Name</label>
                            <input onChange={(e)=>setCreds({...creds, name:e.target.value})} type="text" name="name" id="name" value={creds.name} placeholder='Enter name' />
                        </div>
                        <div className={styles.element}>
                            <label>Email</label>
                            <input onChange={(e)=>setCreds({...creds, identifier:e.target.value})} type="text" name="username" id="username" value={creds.username} placeholder='Enter email' />
                        </div>
                        <div className={styles.element}>
                            <label>Password </label>
                            <input onChange={(e)=>setCreds({...creds, password:e.target.value})} type="password" name="password" id="password" value={creds.password} placeholder='Enter password'/>
                        </div>
                        <div className={styles.element}>
                            <label>Phone number </label>
                            <input 
                                onChange={(e)=>{
                                    setCreds({...creds, phone:e.target.value})
                                    if (e.target.value.length > 10) {
                                        setIsError(true);
                                    }else{
                                        setIsError(false);
                                    }
                                }} 
                                type="tel" name="password" id="password" value={creds.phone} placeholder='Enter Phone number'/>
                            {isError ? <p className={styles.error}>Please enter a valid phone number</p>:null}
                        </div>
                        <div className={styles.center}>
                            <input type='submit' value='Register' className={styles.btn} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register