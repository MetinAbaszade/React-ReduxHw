import { createContext, useContext, useEffect, useState } from "react";

const context = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('User')) || false);
    const data = { user, setUser };

    useEffect(() => {
        localStorage.setItem('User', JSON.stringify(user))
    }, [user])

    return (
        <context.Provider value={data}>
            {children}
        </context.Provider>
    )
}

export const useAuth = () => useContext(context);