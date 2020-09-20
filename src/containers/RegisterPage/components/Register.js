import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';
import styles from './Register.module.css';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onFormValueChangeHandler = (e) => {
      setEmail(e.target.value);
    }
  return (
    <div>
      <main>
        <center>
            <div className="section"></div>

          <div className="container">
            <div className="z-depth-1 grey lighten-4 row" style={{ display: 'inline-block', 'padding': '32px 48px 0px 48px', border: '1px solid #EEE' }}>
            <h5 className="indigo-text">Create New Account</h5>
              <form className="col s12" method="post">
               
                <div className={`row ${styles.registerInputFields}`}>
                  <div className='input-field col s12'>
                    <Input name="name" id="name" label="Enter your Name">
                      <Input.icon icon="person_outline" />
                    </Input>
                  </div>
                </div>

                <div className={`row ${styles.registerInputFields}`}>
                  <div className='input-field col s12'>
                    <Input name="email" id="email" label="Enter your email"  onChange={onFormValueChangeHandler} value={email}>
                      <Input.icon icon="email" />
                    </Input>
                  </div>
                </div>
                <div className={`row ${styles.registerInputFields}`}>
                  <div className='input-field col s12'>
                  <Input name="password" id="password" label="Enter your password">
                    <Input.icon icon="security" />
                  </Input>
                  </div>
                </div>

                <div className={`row ${styles.registerInputFields}`}>
                  <div className='input-field col s12'>
                  <Input name="mobNumber" id="mobNumber" label="Enter Mobile Number" >
                    <Input.icon icon="phone_android" />
                  </Input>
                  </div>
                  <label style={{ float: 'right' }}>
                    <Link className='pink-text' to="/login"><b>Already Registered ? Login Here</b></Link>
                  </label>
                </div>

                <br />
                <center>
                  <div className='row'>
                    <Button type='submit' name='btn_register'>Register</Button>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </center>

        <div className="section"></div>
        <div className="section"></div>
      </main>
    </div>
  )
}

export default Register;
