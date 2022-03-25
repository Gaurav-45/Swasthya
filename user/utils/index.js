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
            // else
            // {
            //     router.push('/login')
            // }
        }
        
        else
        {
           console.log("bad request")
        }
        
    }, []);

    return user;
}

// export const logout = async () => {

//     const {user,setUser} = useContext(UserContext)
//     const router = useRouter()
//     const resp = await axios.get("http://localhost:8800/user/logout",{withCredentials: true })

//     if(resp.data)
//     {
//         if(resp.data.status)
//         {
//             setUser(null);
//             router.push('/')
//         }
//         else{
//             console.log("error has occured");
//         }    
//     }
// }