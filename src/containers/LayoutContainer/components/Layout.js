import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../../LoginPage';
import RegsiterPage from '../../RegisterPage';

const Layout = () => {
    return (
        <div>
            <Navbar />
            <main>
                <Switch>
                <Route path="/register" exact component={RegsiterPage} />
                <Route path="/login" exact component={LoginPage} />
                    {/* 
                     */}
                </Switch>
            </main>
        </div>
    )
}

export default Layout
