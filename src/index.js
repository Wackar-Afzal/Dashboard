import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { Line } from "./pages";
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider value={{  activeMenu:true,
        setactiveMenu:true}}>
        {/* <Line/> */}
        {/* {console.log("hello")} */}
        <App/>
    </ContextProvider>,document.getElementById('root'));
