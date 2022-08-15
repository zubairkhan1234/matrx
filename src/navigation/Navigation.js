import * as React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from '../views/Login'
import SignUp from "../views/SignUp";
import ForgotPassword from "../views/ForgotPassword";
import Home from "../views/Home";
import Tool from "../views/Tool";
import Profile from "../views/Profile";
import Shop from "../views/Shop";
import { UseGlobalState } from '../context/context'
export default function Navigation() {
    const GlobalState = UseGlobalState()
    return (
        <div className="App">
            <BrowserRouter>
                {GlobalState.user ?
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/home-tool" element={<Tool />} />
                        <Route path="/home-profile" element={<Profile />} />
                        <Route path="/home-Shop" element={<Shop />} />
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    </Routes>
                    :
                    <Routes>
                        <Route path="/" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/forgot-Password" element={<ForgotPassword />} />
                        <Route
                            path="*"
                            element={<Navigate to="/login" replace />}
                        />
                    </Routes>

                }
            </BrowserRouter>
        </div>
    );
}