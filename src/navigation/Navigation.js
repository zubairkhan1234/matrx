import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from '../views/Login'
import SignUp from "../views/SignUp";
import ForgotPassword from "../views/ForgotPassword";
import Home from "../views/Home";

export default function Navigation() {
    return (
        <div className="App">
            <Routes>
                <Route path="*" element={<Login />} />
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-Password" element={<ForgotPassword />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}