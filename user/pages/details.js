import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import { setUserState, logout } from '../utils';
import { useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';

const details = () => {

    const router = useRouter();
    const user = setUserState();
    const [cnt, setCnt] = useState(0)
    const {guser, setUser} = useContext(UserContext);

    useEffect(async() => {
        if(cnt > 0){
            const resp = await axios.get("http://localhost:8800/user/logout",{withCredentials: true })

            if(resp.data)
            {
                if(resp.data.status)
                {
                    setUser(null);
                    router.push('/login')
                }
                else{
                    console.log("error has occured");
                }    
            }
        }
    }, [cnt])
    

    const showDetails = () =>{

        const firebaseUid = user.uid
        const email = user.email
        const name = user.displayName
        console.log(user);
    }

    const handleClick = () => {
        setCnt(prev => prev+1)
    }
    
     return user === null ? <div>Loading</div> : ( 
        <div>
            {user &&(<div>Logged in</div>)}
            <button onClick={showDetails}>Show</button>
            <button onClick={handleClick}>LogOut</button>
        </div>);  
    
}

export default details;