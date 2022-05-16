import React, {useState, useContext, useEffect} from 'react'
import styles from '../styles/Profile.module.css'
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { sessionState } from '../actions/index';


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
      marginBottom: 30,
      marginRight: 25,
      width:'70%'
    },
    marginLeft:'auto',
    marginRight:'auto',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width:700
  },
  chip: {
    margin: theme.spacing(0.5),
    fontSize: 14
  },
  categories:{
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(1.2),
    margin: 20,
    backgroundColor:'#D8E8F1',
    '& .MuiTextField-root': {
        marginBottom: 0
    }
  }

}));


const Profile = () => {

    const classes = useStyles();
    const [disabled, setDisable] = useState(true)
    const router = useRouter()
    const [cnt, setCnt] = useState(0)
    const [newCatergory, setNewCategory]=useState("")
    const userState = useSelector((state) => state.storeSession)
    const dispatch = useDispatch()

    const[userData, setUserData]=useState({
        name : "",
        email : "",
        phoneNumber1:"",
        gender:"",
        dob:"",
        experience:"",
        bio:"",
        category:["Yoga", "Endurance"]
    })

    useEffect(async() => {
        if(cnt > 0){
            dispatch(sessionState(null))
            router.push('/login')
        }
    }, [cnt])

    useEffect(() => {
      
        if(userState){
        setUserData({
                name : userState.name === undefined ? "" : userState.name,
                email : userState.email === undefined ? "" : userState.email,
                gender: userState.gender === undefined ? "" : userState.gender,
                dob: userState.dob === undefined ? "" : userState.dob,
                phoneNumber1: userState.phoneNumber1 === undefined ? "" : userState.phoneNumber1,
                experience: userState.experience === undefined ? "0 years" : userState.experience,
                bio: userState.bio === undefined ? "" : userState.bio,
                category: userState.category === undefined ? [] : userState.category
            })
        }
    }, [userState])

    
    const handleClick=(e)=>{
        e.preventDefault()
        setDisable(prev => !prev)
    }

    const handleSave = (e) => {
        e.preventDefault()

        const id = userState._id

        axios.patch("https://swasthya-backend.herokuapp.com/coach", userData, {params : {userId : id}})
        .then(res => {
            console.log("RES",res);
            dispatch(sessionState(res.data.result))
            console.log("User data update successfully")
        })
        .catch(err => console.log(err))

        setDisable(prev => !prev)
    }

    const handleDelete = (chipToDelete) => () => {
        var newCat=userData.category.filter((chip)=>chip!=chipToDelete);
        setUserData({...userData, category: newCat})
    };

    const addNewCat=(e)=>{
        e.preventDefault()
        userData.category.push(newCatergory);
        setNewCategory("")
    }

    const handleCancel = (e) => {
        e.preventDefault()

        setUserData({
                name : userState.name === undefined ? "" : userState.name,
                email : userState.email === undefined ? "" : userState.email,
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

    const handleLogout = (e) => {
        e.preventDefault()
        setCnt(prev => prev + 1)
    }

  
  return (
    <div className={styles.data}> 
                <p className={styles.headers}>Profile picture</p>
                    <div className={styles.profile}>
                        <img src="https://lh3.googleusercontent.com/ogw/ADea4I6fdtjkOOitsUPsUkVmX3WcWSwVxQDdU6p_2QMK=s32-c-mo" alt="Profile Picture" />
                    </div>
                    <div className={styles.info}>
                    <p className={styles.headers}>My Information</p>
                    <div className={styles.body}>
                            <form className={classes.root} onSubmit={handleClick}>
                                <div>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        value={userData.name}
                                        onChange={e=>setUserData({...userData, name : e.target.value})}
                                        helperText="Full name"
                                        variant="outlined"
                                        disabled={disabled}
                                    />
                                </div>
                                <div className={styles.contact}>
                                    <TextField
                                            id="email"
                                            label="Email"
                                            value={userData.email}
                                            onChange={e=> setUserData({...userData, email : e.target.value})}
                                            variant="outlined"
                                            disabled={true}
                                    />
                                    <TextField
                                        id="phone"
                                        label="Phone Number"
                                        value={userData.phoneNumber1}
                                        onChange={e=> setUserData({...userData, phoneNumber1 : e.target.value})}
                                        variant="outlined"
                                        disabled={disabled}
                                    />
                                </div>
                                <div className={styles.personal}>
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
                                    <TextField 
                                        id="experience" 
                                        label="Experience" 
                                        variant="outlined" 
                                        onChange={(e)=>setUserData({...userData,experience:e.target.value})} 
                                        value={userData.experience}
                                        disabled={disabled}
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start">Years</InputAdornment>,
                                        }}
                                    />
                                </div>
                                <div>
                                    <textarea name="bio" id="bio" 
                                        cols="70" rows="10" 
                                        placeholder='Your bio' 
                                        value={userData.bio} 
                                        onChange={(e)=>setUserData({...userData, bio:e.target.value})} 
                                        disabled={disabled}
                                    />
                                </div>

                                <div className={styles.categories}>
                                    <p>Your categories: </p>
                                    <Paper component="ul" className={classes.categories}>
                                        {userData.category.length==0?<p>Plase add catergories by clicking on Edit button</p>:
                                            <>
                                                {userData.category.map((data, key) => {
                                                    return (
                                                    <li key={key}>
                                                        <Chip
                                                            // icon={icon}
                                                            label={data}
                                                            onDelete={handleDelete(data)}
                                                            className={classes.chip}
                                                            color="primary" 
                                                            disabled={disabled}
                                                        />
                                                    </li>
                                                    );
                                                })}
                                            </>
                                        }
                                        
                                    </Paper>
                                </div>
                                {!disabled && <div className={styles.add}>
                                        <TextField
                                            id="newCatergory"
                                            label="Add new catergory"
                                            value={newCatergory}
                                            onChange={e=> setNewCategory(e.target.value)}
                                            variant="outlined"
                                        />
                                        <button onClick={addNewCat} className={styles.addButton}>
                                            Add
                                        </button>
                                </div>}
                                
                                
                                
                                <div className={styles.footer}>
                                    {disabled && <button type="submit" >Edit</button>}
                                    {!disabled && <button onClick={handleCancel} >Cancel</button>}
                                    {!disabled && <button onClick={handleSave} >Save</button>}
                                </div>
                            </form>
                    </div>
                </div>
            </div>
  )
}

export default Profile