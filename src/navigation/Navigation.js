import React from "react";
import { useSelector } from "react-redux";


// Navigation router

import AuthNavigation from "./authNavigation/authNavigation";
import HomeNavigation from "./homeNavigation/homeNavigation";

export default function Navigation() {
    const { user } = useSelector(state => state.authState)



    return (
        <div className="App">
            {user !== null ?
                <HomeNavigation />
                :
                <AuthNavigation />
            }
        </div >
    );
}