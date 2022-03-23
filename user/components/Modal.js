import 'date-fns';
import React, { useState } from 'react'
import styles from '../styles/modal.module.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const gender=[
    {
        value: 'Male',
        label: 'Male',
    },
    {
        value: 'Female',
        label: 'Female',
    },
    {
        value: 'Other',
        label: 'Pranav',
    }
]

const blood=[
    {
        value: 'A+',
        label: 'A+',
    },
    {
        value: 'A-',
        label: 'A-',
    },
    {
        value: 'B+',
        label: 'B+',
    },
    {
        value: 'B-',
        label: 'B-',
    },
    {
        value: 'AB+',
        label: 'AB+',
    },
    {
        value: 'AB-',
        label: 'AB-',
    },
    {
        value: 'O+',
        label: 'O+',
    },
    {
        value: 'O-',
        label: 'O-',
    }
]

const dis=[
    {
        value: true,
        label: 'Yes',
    },
    {
        value: false,
        label: 'No',
    }
]

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        marginBottom: 20,
        marginRight: 15,
      },
    },
}));

const Modal = ({showModal, setShowModal}) => {

    const classes = useStyles();

  const[userData, setUserData]=useState({
      gender:"",
      dob:"",
      height:"",
      weight:"",
      bg:"",
      diabetes:false,
      asthma:false
  })

  const handleClick=(e)=>{
      //Add put req logic here
      e.preventDefault()
      setShowModal(prev=>!prev)
      console.log(userData)
  }

  return (
    <>
        {showModal?(
            <div className={styles.background}>
                <div className={styles.wrapper}>
                    <div className={styles.close}>
                        <button onClick={()=>setShowModal(prev=>!prev)}>X</button>
                    </div>
                    <div className={styles.title}>
                        <h1>Help us you know better<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/person-lifting-weights_1f3cb-fe0f.png" alt="" className={styles.gym}/></h1>   
                    </div>
                    <div className={styles.body}>
                        <form className={classes.root} onSubmit={handleClick}>
                            <div>
                                <TextField
                                    select
                                    label="Gender"
                                    value={userData.gender}
                                    onChange={e=>setUserData({...userData, gender:e.target.value})}
                                    helperText="Select your gender"
                                    variant="outlined"
                                    required
                                    >
                                    {gender.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    id="date"
                                    label="Date of Birth"
                                    type="date"
                                    value={userData.dob}
                                    onChange={e=>setUserData({...userData, dob:e.target.value})}
                                    variant='outlined'
                                    required
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>

                            <div>
                                <TextField 
                                    id="height" 
                                    label="Height" 
                                    variant="outlined" 
                                    onChange={(e)=>setUserData({...userData,height:e.target.value})} 
                                    required
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Cm</InputAdornment>,
                                    }}
                                />
                                <TextField 
                                    id="weight" 
                                    label="Weight" 
                                    variant="outlined" 
                                    onChange={(e)=>setUserData({...userData,weight:e.target.value})} 
                                    required
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                    }}
                                />
                            </div>

                            <TextField
                                select
                                label="Blood group"
                                value={userData.bg}
                                onChange={e=>setUserData({...userData, bg:e.target.value})}
                                helperText="Select your blood group"
                                variant="outlined"
                                >
                                {blood.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <div>
                                <TextField
                                    select
                                    label="Diabetes"
                                    value={userData.diabetes}
                                    onChange={e=>setUserData({...userData, diabetes:e.target.value})}
                                    helperText="Do you have diabetes?"
                                    variant="outlined"
                                    >
                                    {dis.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    select
                                    label="Asthma"
                                    value={userData.asthma}
                                    onChange={e=>setUserData({...userData, asthma:e.target.value})}
                                    helperText="Do you have asthma?"
                                    variant="outlined"
                                    >
                                    {dis.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className={styles.footer}>
                                <button type="submit" >Submit 💪🏼</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ):null}
    </>
  )
}

export default Modal