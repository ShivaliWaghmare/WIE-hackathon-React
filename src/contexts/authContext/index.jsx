import { useEffect, useContext, useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}) 
{
    const [currentuser, setcurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser);
    },[])

    async function intitializeUser(user){
        if (user) {
            setcurrentUser({ ...user});
            setUserLoggedIn(true);
        } else  {
            setcurrentUser(null);
            setUserLoggedIn(false);
        } 
        setLoading(false);
    }

    const value = {
        currentuser,
        userLoggedIn,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}