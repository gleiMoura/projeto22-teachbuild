import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import Timeline from "../pages/timeline"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/timeline" element={<Timeline />} />
            </Routes>
        </BrowserRouter>
    );
};

{/*
                <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                <Route path="/users/:id" element={<UserPage />} /> */}

