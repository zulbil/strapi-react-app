import React, { useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const RegisterForm = () => {

    const userNameRef                   =    useRef()
    const emailRef                  	=    useRef()
    const passwordRef                   =    useRef()
    const passwordConfirmRef            =    useRef()
    const { signup }                    =    useAuth()
    const [ error, setError ]           =    useState()

    function handleSignupAction(e) {
        e.preventDefault()
        setError('')
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError('Password did not match')
            return false
        }

        signup(userNameRef.current.value, emailRef.current.value, passwordRef.current.value)
    }

    return (
        <>
            <form className="shadow" onSubmit={handleSignupAction}>
                {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}
                <div className="mb-3">
                    <label htmlFor="exampleUsernameInput" className="form-label">Username</label>
                    <input type="text" className="form-control" ref={userNameRef} id="exampleUsernameInput" aria-describedby="usernameHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" ref={emailRef} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" ref={passwordRef} id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" ref={passwordConfirmRef} id="exampleInputPassword1" />
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-block btn-warning fw-bold">Sign up for free </button>
                </div>
            </form>
            <div className="text-center mt-3">
                <p>Already have an account ? <Link to='/login'> Sign in now </Link></p>
            </div>  
        </>  
    )
}

export default RegisterForm
