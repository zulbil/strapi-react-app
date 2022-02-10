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
            .post('http://localhost:1337/api/auth/local/register', {
                username,
                email,
                password,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log(response);
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
            });
    }

    function login(email, password) {
        axios
            .post('http://localhost:1337/api/auth/local', {
                identifier: email,
                password: password,
            })
            .then(response => {
                // Handle success.
                console.log('Well done!');
                console.log('User profile', response.data.user);
                console.log('User token', response.data.jwt);
            })
            .catch(error => {
                // Handle error.
                console.log('An error occurred:', error.response);
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

