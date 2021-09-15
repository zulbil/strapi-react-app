import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from '../components/Navbar'

const WithNavbarLayout = ({ component: Component , ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <>
                <Navbar />
                <Component {...props} />
            </>
        )} />
    )
}

export default WithNavbarLayout
