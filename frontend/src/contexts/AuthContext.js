import React, { useContext, useState } from "react"

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    function signup(email,password) {
        //TODO:: autheticate signup process
    }

    function login(email, password) {
        //TODO:: authenticate signin process
    }

    const value = {
        currentUser,
        signup,
        login
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

