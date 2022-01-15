import React from 'react'
import RegisterForm from '../components/RegisterForm'

function RegisterPage() {
    return (
        <main>
            <div className="container-login-form bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                        <div className="h1 text-center mb-4">
                                <span className="logo"><i className="bi bi-cursor icon-logo"></i> <span>HuntPress</span></span>
                            </div>
                            
                            <div className="text-center h2 fw-bold">Get started with HuntPress today 🎊</div>
                            <p className="text-center text-small mb-5">We're trusted by thousands of PR agencies & companies all over the world like Universal Music Group, Instacart, and Facebook.</p>
                            <RegisterForm />
                        </div>
                    </div>
                </div> 
            </div>
        </main>
    )
}

export default RegisterPage

