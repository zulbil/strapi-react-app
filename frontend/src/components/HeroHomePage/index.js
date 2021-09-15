import React from 'react'
import { Link } from "react-router-dom"
import './style.scss'

function HeroHomePage() {
    return (
        <section className="py-5 text-center bg-dark">
            <div className="container">
                <div className="row py-lg-5 text-white">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Get connected with the best journalists to feature your business in seconds</h1>
                        <p className="lead">Press Hunt saves you hundreds of hours by aggregating data on over 750k journalists, reporters, and podcasts in one place, complete with their coverage focuses and contact info</p>
                        <p>
                        <Link to="/journalists" className="btn btn-warning m-4 px-5 py-3">Discover journalists</Link>
                        <a href="#js--journalist-view" className="btn btn-outline-light m-4 px-5 py-3">Try for free</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroHomePage
