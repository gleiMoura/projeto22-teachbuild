import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import MainPage from "../pages/mainPage"
import TeacherPage from "../pages/teacherPage";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/userspage" element={<MainPage />} />
                <Route path="/teacherPage" element={<TeacherPage />} />
            </Routes>
        </BrowserRouter>
    );
};

{/*
                <Route path="/hashtag/:hashtag" element={<HashtagPage />} />
                <Route path="/users/:id" element={<UserPage />} /> */}

