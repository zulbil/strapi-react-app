import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

const Avatar = ({ path, firstname }) => {

    const generateInitial = (name) => {
        if(!name) return 'a'
        return name.charAt(0);
    }

    return (
        <>
            {
                path ? 
                <div className="avatar bg-avatar" style={ { backgroundImage : `url(http://localhost:1337${path})` } }></div> :
                <div className="avatar initial">{generateInitial(firstname)}</div>

            }
        </>
    )
}

Avatar.defaultProps = {
    path: '',
    firstname: ''
}

Avatar.propTypes = {
    path: PropTypes.string,
    firstname: PropTypes.string.isRequired
}

export default Avatar
