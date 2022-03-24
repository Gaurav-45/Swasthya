import React, {useState} from 'react'
import styles from '../styles/user.module.css'
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

const user = () => {

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
  return (
    <div className={styles.user}>
        <div className={styles.profile}>
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I6fdtjkOOitsUPsUkVmX3WcWSwVxQDdU6p_2QMK=s32-c-mo" alt="" className={styles.pic}/>
            <p className={styles.name}>Gaurav Parulekar</p>
            <p>Log out 👋</p>
        </div>
        <div className={styles.data}>
            <h2>Profile</h2>
            {/* <form className={classes.root} >
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
            </form> */}
            <form action="">
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
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />   
            </form>
        </div>

    </div>
  )
}

export default user

