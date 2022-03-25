import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Sidehug from '../components/Sidehug'
import MyClass from '../components/MyClass'
import { useState } from 'react'
import Modal from '../components/Modal'

import { UserContext } from '../UserContext'
import {useContext} from 'react';
export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const handleModal=()=>{
    setShowModal(prev=>!prev);
  }

  return (
    <div className={styles.home}>
      <Navbar/>
      <Sidehug/>
      <h4>My classes</h4> 
      <div className={styles.class}>
        <MyClass/>
        <MyClass/>
      </div>
      <button className='button' onClick={handleModal}>Im Modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal}/>
    </div>
  )
}
