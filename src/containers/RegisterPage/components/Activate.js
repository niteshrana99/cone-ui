import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import Button from '../../../components/Button/Button';

const Activate = () => {
    
    const [name,setName] = useState("");
    const {id} = useParams();

    useEffect(() => {
        const userInfo = jwt.decode(id);
        setName(userInfo.name);
    }, []);
    return (
        <div>
             <main>
        <center>
            <div className="section"></div>

          <div className="container">
            <div className="z-depth-1 grey lighten-4 row" style={{ display: 'inline-block', 'padding': '32px 48px 0px 48px', border: '1px solid #EEE' }}>
            <h5 className="indigo-text">Verify your account</h5>
              <p>Hello {name},</p>
              <div>
                  Please click on below button to verify your account.
              </div>
              <br />
              <Button>Verify Account</Button>
              <br/><br/><br/><br/><br/>
            </div>
            <div className="section"></div>
        <div className="section"></div>
          </div>
        </center>

        
      </main>
        </div>
    )
}

export default Activate
