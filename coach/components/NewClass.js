import React, { useEffect } from 'react'
import styles from '../styles/NewClass.module.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { sessionState } from '../actions/index';

const NewClass = ({ setClassModal }) => {

  const dispatch = useDispatch()

  const body = {
    "coachId": "629325e42ade3aece3cd5a3f",
    "title": "Workout",
    "category": "Core",
    "equipmentRequired": [
      "Dumbells",
      "Mat"
    ],
    "plan": [
      [
        1,
        5
      ],
      [
        1,
        0
      ]
    ],
    "startDate": "29-05-2022"
  }

  useEffect(() => {
    axios.post('http://localhost:8800/class', body)
      .then((response) => {
        dispatch(sessionState(response.data.coach))
        Swal.fire(
          'Success!',
          'Class created successfully!',
          'success'
        )
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<p>Probably a Class already exists on the request date and time</p>'
        })
      })

    setClassModal(prev => !prev);
  }, [])

  return (
    <div className={styles.newClass}>
      <h1>Create a new class</h1>
    </div>
  )
}

export default NewClass