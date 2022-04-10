import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector } from 'react-redux'

export default function Home() {

  const state = useSelector((state) => state.storeSession)

  console.log(state);

  return (
    <h1>This is the Landing page for the Coach</h1>
  )
}
