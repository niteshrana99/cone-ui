import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, disabled, type, name, onClick}) => {
    return (
        <div>
             <button type={type} disabled={disabled} onClick={onClick} name={name} className='col s12 btn btn-large waves-effect indigo'>
                 {children}
             </button>
        </div>
    )
}

Button.propTypes = {
    children: PropTypes.any,
    disabled:PropTypes.bool,
}

Button.defaaultProps = {
    disabled: false
}

export default Button
