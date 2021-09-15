import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const LoginForm = () => {
    return (
        <form className="shadow">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
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
