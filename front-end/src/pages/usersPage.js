import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";
import Posts from "../components/posts";

export default function Timeline() {
    const navigate = useNavigate();
    const [thereIsToken, setThereIsToken] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("data")) {
            navigate("/");
        } else {
            setThereIsToken(true);
        };
    }, []);

    if (thereIsToken === true) {
        return (
            <Main>
                <Header />
                <Posts />
            </Main>
        )
    }
};

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333;
    overflow-y: hidden;
    scroll-behavior: auto;
`;



