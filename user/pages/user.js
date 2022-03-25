import React, {useState, useContext, useEffect} from 'react'
import styles from '../styles/user.module.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import { setUserState } from '../utils';
import { UserContext } from '../UserContext';
import axios from 'axios';

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
        label: 'Other',
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
    const userState = setUserState()
    const [disabled, setDisable] = useState(true)

    useEffect(() => {
      
        if(userState!==null){
        setUserData({
                gender: userState.gender === undefined ? "" : userState.gender,
                dob: userState.dob === undefined ? "" : userState.dob,
                heightInCm: userState.heightInCm === undefined ? "" : userState.heightInCm,
                weightInKg: userState.weightInKg === undefined ? "" : userState.weightInKg,
                bloodGroup: userState.bloodGroup === undefined ? "" : userState.bloodGroup,
                hasDiabetes: userState.hasDiabetes ? userState.hasDiabetes : false,
                hasAsthma: userState.hasAsthma ? userState.hasAsthma : false
            })
        }

    }, [userState])

    const[userData, setUserData]=useState({
        gender:"",
        dob:"",
        heightInCm:"",
        weightInKg:"",
        bloodGroup:"",
        hasDiabetes:false,
        hasAsthma:false
    })
    
    const handleClick=(e)=>{
        e.preventDefault()
        setDisable(prev => !prev)
    }

    const handleSave = (e) => {
        e.preventDefault()

        const id = userState._id

        axios.patch("http://localhost:8800/user", userData, {params : {userId : id}})
        .then(res => {
            console.log("User data update successfully")
        })
        .catch(err => console.log(err))

        setDisable(prev => !prev)
    }

    const handleCancel = (e) => {
        e.preventDefault()

        setUserData({
                gender: userState.gender === undefined ? "" : userState.gender,
                dob: userState.dob === undefined ? "" : userState.dob,
                heightInCm: userState.heightInCm === undefined ? "" : userState.heightInCm,
                weightInKg: userState.weightInKg === undefined ? "" : userState.weightInKg,
                bloodGroup: userState.bloodGroup === undefined ? "" : userState.bloodGroup,
                hasDiabetes: userState.hasDiabetes ? userState.hasDiabetes : false,
                hasAsthma: userState.hasAsthma ? userState.hasAsthma : false
            })

        setDisable(prev => !prev)
    }


    return (
        <>
        {userState ? (<div className={styles.user}>
            <div className={styles.profile}>
                <img src="https://lh3.googleusercontent.com/ogw/ADea4I6fdtjkOOitsUPsUkVmX3WcWSwVxQDdU6p_2QMK=s32-c-mo" alt="" className={styles.pic}/>
                <p className={styles.name}>{userState.name}</p>
                <p>Log out 👋</p>
            </div>
            <div className={styles.data}> 
                <h2>Profile</h2>
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
                                        disabled={disabled}
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
                                        disabled={disabled}
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
                                        onChange={(e)=>setUserData({...userData,heightInCm:e.target.value})} 
                                        value={userData.heightInCm}
                                        disabled={disabled}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Cm</InputAdornment>,
                                        }}
                                    />
                                    <TextField 
                                        id="weight" 
                                        label="Weight" 
                                        variant="outlined" 
                                        onChange={(e)=>setUserData({...userData,weightInKg:e.target.value})} 
                                        value={userData.weightInKg}
                                        disabled={disabled}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                                        }}
                                    />
                                </div>

                                <TextField
                                    select
                                    label="Blood group"
                                    value={userData.bloodGroup}
                                    onChange={e=>setUserData({...userData, bloodGroup:e.target.value})}
                                    helperText="Select your blood group"
                                    variant="outlined"
                                    disabled={disabled}
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
                                        value={userData.hasDiabetes}
                                        onChange={e=>setUserData({...userData, hasDiabetes:e.target.value})}
                                        helperText="Do you have diabetes?"
                                        variant="outlined"
                                        disabled={disabled}
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
                                        value={userData.hasAsthma}
                                        onChange={e=>setUserData({...userData, hasAsthma:e.target.value})}
                                        helperText="Do you have asthma?"
                                        variant="outlined"
                                        disabled={disabled}
                                        >
                                        {dis.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </div>
                                <div className={styles.footer}>
                                    {disabled && <button type="submit" >Edit</button>}
                                    {!disabled && <button onClick={handleCancel} >Cancel</button>}
                                    {!disabled && <button onClick={handleSave} >Save</button>}
                                </div>
                            </form>
                    </div>
            </div>
        </div>) : null}
        </>
    )
}

export default user