import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from '../views/Login'
import SignUp from "../views/SignUp";
import ForgotPassword from "../views/ForgotPassword";

export default function Navigation() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-Password" element={<ForgotPassword />} />
            </Routes>
        </div>
    );
}