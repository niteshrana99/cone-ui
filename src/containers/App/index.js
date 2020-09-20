import React, {useEffect} from 'react'
import LayoutContainer from '../LayoutContainer';
import { BrowserRouter } from 'react-router-dom';
import M from "materialize-css";

const App = () => {
    useEffect(() => {
        M.AutoInit();
    }, []);
    return (
        <BrowserRouter>
        <div>
            <LayoutContainer />
        </div>
        </BrowserRouter>
    )
}

export default App;
