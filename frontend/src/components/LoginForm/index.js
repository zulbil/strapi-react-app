import { useRef } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const LoginForm = () => {

    const emailRef                 =   useRef()
    const passwordRef              =   useRef()

    function handleLoginAction() {
        alert('Login...')
    }

    return (
        <form className="shadow needs-validation" noValidate onSubmit={handleLoginAction}>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" ref={emailRef} aria-describedby="emailHelp" required/>
                <div className="invalid-feedback">
                    Please provide a valid email.
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
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
