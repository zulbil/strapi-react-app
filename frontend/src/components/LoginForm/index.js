import { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './style.scss'

const LoginForm = () => {

    const emailRef                 =    useRef()
    const passwordRef              =    useRef()
    const { login }                =    useAuth()
    const history                  =    useHistory()
    const [ error, setError ]      =    useState()

    function handleLoginAction(e) {
        try {
            e.preventDefault()
            setError('')
            login(emailRef.current.value, passwordRef.current.value)
            history.push('/journalists')
        } catch (error) {
            setError('Your email or password are incorrect. Try again')
        }
        
    }

    return (
        <form className="shadow needs-validation" onSubmit={handleLoginAction}>
            {error && <div className="alert alert-danger" role="alert">
                    {error}
                </div>}
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" ref={emailRef} aria-describedby="emailHelp" required/>
                <div className="invalid-feedback">
                    Please provide a valid email.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} required />
                <div className="invalid-feedback">
                    Please provide a valid password.
                </div>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-block btn-warning fw-bold">Sign in</button>
            </div>
            <div className="text-center mt-3">
                <Link to='/'> Forgot your password ? </Link>
            </div>
        </form>    
    )
}

export default LoginForm
