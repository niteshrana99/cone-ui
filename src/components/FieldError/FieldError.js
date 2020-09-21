import React from 'react'

const FieldError = ({message}) => {
    return (
        <div>
            <span className="red-text">{message}</span>
        </div>
    )
}

export default FieldError
