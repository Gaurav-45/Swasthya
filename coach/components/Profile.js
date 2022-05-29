import React, { useState, useContext, useEffect } from 'react'
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
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const gender = [
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

const categories = [
    {
        key: 1,
        value: "Cat1"
    },
    {
        key: 2,
        value: "Cat2"
    },
    {
        key: 3,
        value: "Cat3"
    },
    {
        key: 4,
        value: "Cat4"
    },
    {
        key: 5,
        value: "Cat5"
    }
]


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginBottom: 30,
            marginRight: 25,
            width: '70%'
        },
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: 700
    },
    chip: {
        margin: theme.spacing(0.5),
        fontSize: 14
    },
    categories: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(1.2),
        margin: 20,
        backgroundColor: '#D8E8F1',
        '& .MuiTextField-root': {
            marginBottom: 0
        }
    }
}));


const Profile = () => {

    const classes = useStyles();
    const [disabled, setDisable] = useState(true)
    const userState = useSelector((state) => state.storeSession)
    const dispatch = useDispatch()

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phoneNumber1: "",
        gender: "",
        dob: "",
        experience: "",
        bio: "",
        category: []
    })

    useEffect(() => {

        if (userState) {
            setUserData({
                name: userState.name === undefined ? "" : userState.name,
                email: userState.email === undefined ? "" : userState.email,
                gender: userState.gender === undefined ? "" : userState.gender,
                dob: userState.dob === undefined ? "" : userState.dob,
                phoneNumber1: userState.phoneNumber1 === undefined ? "" : userState.phoneNumber1,
                experience: userState.experience === undefined ? "0 years" : userState.experience,
                bio: userState.bio === undefined ? "" : userState.bio,
                category: userState.category === undefined ? [] : userState.category
            })
        }
    }, [userState])


    const handleClick = (e) => {
        e.preventDefault()
        setDisable(prev => !prev)
    }

    const handleSave = (e) => {
        e.preventDefault()
        console.log(userData)
        const id = userState._id

        axios.patch("https://swasthya-backend.herokuapp.com/coach", userData, { params: { coachId: id } })
            .then(res => {
                dispatch(sessionState(res.data.result))
            })
            .catch(err => console.log(err))

        setDisable(prev => !prev)
    }

    const handleDelete = (chipToDelete) => () => {
        var newCat = userData.category.filter((chip) => chip != chipToDelete);
        setUserData({ ...userData, category: newCat })
    };

    const addNewCat = (e) => {
        let newCat = userData.category;
        newCat.push(e.target.value);
        setUserData({ ...userData, category: newCat })
        console.log(userData.category)
    }

    const handleCancel = (e) => {
        e.preventDefault()

        setUserData({
            name: userState.name === undefined ? "" : userState.name,
            email: userState.email === undefined ? "" : userState.email,
            gender: userState.gender === undefined ? "" : userState.gender,
            dob: userState.dob === undefined ? "" : userState.dob,
            phoneNumber1: userState.phoneNumber1 === undefined ? "" : userState.phoneNumber1,
            experience: userState.experience === undefined ? "0 years" : userState.experience,
            bio: userState.bio === undefined ? "" : userState.bio,
            category: userState.category === undefined ? [] : userState.category
        })

        setDisable(prev => !prev)
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
                                onChange={e => setUserData({ ...userData, name: e.target.value })}
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
                                onChange={e => setUserData({ ...userData, email: e.target.value })}
                                variant="outlined"
                                disabled={true}
                            />
                            <TextField
                                id="phone"
                                label="Phone Number"
                                value={userData.phoneNumber1}
                                onChange={e => setUserData({ ...userData, phoneNumber1: e.target.value })}
                                variant="outlined"
                                disabled={disabled}
                            />
                        </div>
                        <div className={styles.personal}>
                            <TextField
                                select
                                label="Gender"
                                value={userData.gender}
                                onChange={e => setUserData({ ...userData, gender: e.target.value })}
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
                                onChange={e => setUserData({ ...userData, dob: e.target.value })}
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
                                onChange={(e) => setUserData({ ...userData, experience: e.target.value })}
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
                                onChange={(e) => setUserData({ ...userData, bio: e.target.value })}
                                disabled={disabled}
                            />
                        </div>

                        <div className={styles.categories}>
                            <p>Your categories: </p>
                            <Paper component="ul" className={classes.categories}>
                                {userData.category.length == 0 ? <p>Plase add catergories by clicking on Edit button</p> :
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
                            <InputLabel id="demo-controlled-open-select-label">Choose your category</InputLabel>
                            <Select
                                displayEmpty
                                onChange={addNewCat}
                                input={<Input />}
                                MenuProps={MenuProps}
                                placeholder="Choose your category"
                            >
                                <MenuItem disabled value="">
                                    Choose your category
                                </MenuItem>
                                {categories.map((cat) => (
                                    <MenuItem key={cat.key} value={cat.value} disabled={userData.category.includes(cat.value)}>
                                        {cat.value}
                                    </MenuItem>
                                ))}
                            </Select>
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