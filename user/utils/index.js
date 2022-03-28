import { UserContext } from '../UserContext'
import {useContext,useEffect} from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export const setUserState = () => {
    const {user,setUser} = useContext(UserContext)
    const router = useRouter()

    useEffect(async() => {
        const resp = await axios.get("http://localhost:8800/user/logged",{withCredentials: true })

        if(resp.data)
        {
            if(resp.data.loggedIn)
            {
                setUser(resp.data.user);
            }
            else
            {
                return "Not logged in"
            }
        }
        
        else
        {
           console.log("bad request")
        }
        
    }, []);

    return user;
}