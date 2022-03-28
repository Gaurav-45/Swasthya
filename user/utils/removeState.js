import React, {useEffect, useContext} from "react";
import { UserContext } from "../UserContext";
import { useRouter } from "next/router";
import axios from "axios";

const removeState = () => {

    const router = useRouter()
    const {user, setUser} = useContext(UserContext)

    useEffect(() => {

        axios.get("http://localhost:8800/user/logout", {withCredentials : true})
        .then(resp => {
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
        })
        .catch(err => console.log(err))

    }, [])
    
    return user;
}
 
export default removeState;