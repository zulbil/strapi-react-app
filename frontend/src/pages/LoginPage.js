import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

function LoginPage() {
    return (
        <main>
            <div className="container-login-form bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="h1 text-center mb-4">
                                <span className="logo"><i className="bi bi-cursor icon-logo"></i> <span>HuntPress</span></span>
                            </div>
                            
                            <div className="text-center h2 fw-bold">Sign into your HuntPress account</div>
                            <p className="text-center text-small mb-5">If you don't have an account already, <Link to='/register'>sign up here</Link></p>
                            <LoginForm />
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    )
}

export default LoginPage

