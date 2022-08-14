import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header"
import { IoMdHeart } from "react-icons/io"; //tirar
import API from "../repository/API";

export default function Timeline() {
    const navigate = useNavigate();
    const [thereIsToken, setThereIsToken] = useState(false);
    const [teachers, setTeachers] = useState([]);
    const userData = JSON.parse(localStorage.getItem("data"));

    const config = {
        headers: {
            authorization: `Bearer ${userData.token}`
        }
    };

    useEffect(() => {
        if (!localStorage.getItem("data")) {
            navigate("/");
        } else {
            setThereIsToken(true);
        };
    }, []);

    useEffect(() => {
        API.getTeachers(config)
            .then(response => {
                setTeachers(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    if (thereIsToken === true) {
        return (
            <Main>
                <Header />
                {userData.type === "teacher" ? teachers.map(teacher => {
                    return (
                        <Section>
                            <header>
                                <p className="name">{teacher.name}</p>
                                <img src={teacher.image} alt="teacher" />
                            </header>
                            <p className="text">{teacher.text}</p>
                            <footer>
                                <p>discipline: {teacher.disciplines.name}</p>
                                <a href={teacher.mbti.link}>{teacher.mbti.name}</a>
                            </footer>
                            <div className="heart">
                            <p>{teacher.likes}</p>
                            < IoMdHeart />
                            </div>
                        </Section>
                    )
                }) : <p>opa</p>}
            </Main>
        )
    }
};

const Main = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333;
`;

const Section = styled.section`
    width: 600px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #000;
    margin:25px 0;
    padding: 20px;
    border-radius: 6px;
    position: relative;

    header {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
    }

    p {
        font-size: 23px;
        color: white;
        font-family: "Oswald", sans-serif;
    }

    img {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        border: 2px solid #fedc00;
    }

    footer {
        display: flex;
        justify-content: space-between;
        padding: 0 10px;
        margin-left: 50px;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 23px;
        font-family: "Oswald", sans-serif;
    }

    a:hover{
        color: #fedc00
    }

    .heart {
        width: 30px;
        display: flex;
        justify-content: space-between;
        font-size: 23px;
        color: #fedc00;
        position: absolute;
        left: 10px;
        bottom: 10px;
        cursor: pointer;
    }

    .text {
        width: 400px;
        height: 50px;
        background-color: gray;
        color: #000;
        border-radius: 6px;
        text-align: left;
        padding: 10px;
        font-size: 18px;
        word-wrap: break-word;
        position: absolute;
        top: 50px
    }

    .name {
        cursor: pointer;
    }

    .name:hover {
        color: #fedc00;
    }
`

