import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'

const Input = ({ type, name, value, autoComplete, label, id, onChange, children,onBlur}) => {
    return (
        <Fragment>
            {children}
            <input onBlur={onBlur}  type={type} autoComplete={autoComplete} name={name} id={id} value={value} onChange={onChange} />
            <label htmlFor={id}>{label}</label>
        </Fragment>
    )
}

Input.icon = Icon;

Input.propTypes = {
    type:PropTypes.string,
    name:PropTypes.string.isRequired,
    value:PropTypes.string.isRequired,
    autoComplete:PropTypes.string,
    label:PropTypes.string.isRequired,
    id:PropTypes.string.isRequired,
    onChange:PropTypes.func,
    onBlur:PropTypes.func,
}

Input.defaultProps = {
    type:"text",
    autoComplete:"off"
}

export default Input
