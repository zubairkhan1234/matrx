import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from '../../views/Login'
import SignUp from "../../views/SignUp";
import ForgotPassword from "../../views/ForgotPassword";

export default function AuthNavigation() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-Password" element={<ForgotPassword />} />
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Routes>
            </BrowserRouter>
        </div >
    );
}