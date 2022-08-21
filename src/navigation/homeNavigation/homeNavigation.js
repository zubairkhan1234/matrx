import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../../views/Home";
import Tool from "../../views/Tool";
import Quiz from "../../views/Quiz";
import Profile from "../../views/Profile";
import Shop from "../../views/Shop";

export default function HomeNavigation() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    < Route path="/" element={<Home />} />
                    <Route path="/home-tool" element={<Tool />} />
                    <Route path="/home-profile" element={<Profile />} />
                    <Route path="/home-Shop" element={<Shop />} />
                    <Route path="/home-quize" element={<Quiz />} />
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />
                </Routes>
            </BrowserRouter>
        </div >
    );
}