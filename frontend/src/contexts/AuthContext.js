import React, { useContext, useState } from "react"
import axios from 'axios'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthContextProvider({ children }) {

    const [currentUser, setCurrentUser] = useState()

    function signup(username,email,password) {
        axios
            .post('http://localhost:1337/auth/local/register', {
                username,
                email,
                password,
            })
            .then(response => {
                setCurrentUser(response.data.user)
                return {
                    success: true,
                    response: response
                }
            })
            .catch(error => {
                return {
                    success: false,
                    response: error
                }
            });
    }

    function login(email, password) {
        axios
            .post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password: password,
            })
            .then(response => {
                setCurrentUser(response.data.user)
            })
            .catch(error => {
                console.log('An error occurred:', error.response);
                throw error
            });
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

