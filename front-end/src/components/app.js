import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

{/* 
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                <Route path="/users/:id" element={<UserPage />} /> */}

