import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import Loader from '../../../components/Loader/Loader';
import WithErrorHandler from '../../../hoc/WithErrorHandler';
import network from '../../../utils/network';

const Login = ({alertMessages}) => {
  const [loginFormState, setLoginFormState] = useState({email: "", password:""});
  const [isLoading, setLoading] = useState(false);
  const {email, password} = loginFormState;
  const onInputChange = (e) => {
    setLoginFormState({
      ...loginFormState,
      [e.target.name] : e.target.value
    })
  }
  const onLoginSubmithandler = async(e) => {
    e.preventDefault();
    if(!email || !password) return alertMessages.error("Please provide valid credentials")
    setLoading(true)
    try {
      await network.postData('login', loginFormState).next().value;
      setLoading(false);
      alertMessages.success("User successfully logged in.")
    } catch (error) {
      setLoading(false)
      alertMessages.error(error.response.data.error)
    }
    
  }
  return (
    <div>
      {isLoading && <Loader /> }
      <main>
        <center>
          <div className="section"></div>
          <div className="container">
            <div className="z-depth-1 grey lighten-4 row" style={{ display: 'inline-block', 'padding': '32px 48px 0px 48px', border: '1px solid #EEE' }}>
            <h5 className="indigo-text">Please, login into your account</h5>
              <form onSubmit={onLoginSubmithandler} className="col s12" method="post">
                <div className='row'>
                  <div className='col s12'>
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                    <Input onChange={onInputChange} name="email" id="email" label="Enter your email" value={email}>
                      <Input.icon icon="email" />
                    </Input>
                  </div>
                </div>

                <div className='row'>
                  <div className='input-field col s12'>
                  <Input onChange={onInputChange} name="password" id="password" label="Enter your password" value={password}>
                    <Input.icon icon="security" />
                  </Input>
                  </div>
                  <label style={{ float: 'right' }}>
                    <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                  </label>
                </div>

                <br />
                <center>
                  <div className='row'>
                  <Button type='submit' name='btn_register'>Login</Button>
                  </div>
                </center>
              </form>
            </div>
          </div>
          <Link to="/register">Create account</Link>
        </center>

        <div className="section"></div>
        <div className="section"></div>
      </main>
    </div>
  )
}

export default WithErrorHandler(Login)
