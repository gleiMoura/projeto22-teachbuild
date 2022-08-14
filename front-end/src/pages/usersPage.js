import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import styled from "styled-components";
import Header from "../components/header"

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
            </Main>
        )
    }
};

const Main = styled.div`
    display: flex;
`;

