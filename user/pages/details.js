import { UserContext } from '../UserContext'
import {useContext,useEffect} from 'react';
import axios from 'axios'
import {useRouter} from 'next/router'

const details = () => {

    const router = useRouter();
    
    const {user,setUser} = useContext(UserContext);
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
                router.push('/login')
            }
        }
        else
        {
           console.log("bad request")
        }
        
      });


    const logout = async() =>{
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
    const showDetails = () =>{

        const firebaseUid = user.uid
        const email = user.email
        const name = user.displayName
        console.log(user);
    }
    
     return user === null ? <div>Loading</div> : ( 
        <div>
            {user &&(<div>Logged in</div>)}
            <button onClick={showDetails}>Show</button>
            <button onClick={logout}>LogOut</button>
        </div>);  
    
}
export default details;