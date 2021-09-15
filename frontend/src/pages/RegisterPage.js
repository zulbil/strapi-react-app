import React from 'react'
import RegisterForm from '../components/RegisterForm'

function RegisterPage() {
    return (
        <main>
            <div className="container-login-form">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <RegisterForm />
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    )
}

export default RegisterPage

