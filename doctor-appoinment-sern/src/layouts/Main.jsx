import React from 'react';
import Header from "../shared/Header/Header"
import Footer from "../shared/Footer/Footer"
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    );
}

export default Main;
