import React from 'react'
import LoginForm from '../components/LoginForm'

function LoginPage() {
    return (
        <main>
            <div className="container-login-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <LoginForm />
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    )
}

export default LoginPage

