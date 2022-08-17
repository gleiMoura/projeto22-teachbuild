import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdHeart } from "react-icons/io"; //tirar
import API from "../repository/API";

export default function Posts() {
    const [teachers, setTeachers] = useState([]);
    const [students, setStudents] = useState([]);
    const [chooseStudent, setChooseStudent] = useState(true)
    const userData = JSON.parse(localStorage.getItem("data"));

    const config = {
        headers: {
            authorization: `Bearer ${userData.token}`
        }
    };

    useEffect(() => {
        API.getTeachers(config)
            .then(response => {
                setTeachers(response.data);
            }).catch(error => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        API.getStudents(config)
            .then(response => {
                setStudents(response.data);
            }).catch(error => {
                console.log(error);
            });
    })

    if (userData.type === "student") {
        return (
            <>
                <Title>Look for the best teacher here</Title>
                {teachers.map(teacher => {
                    return (
                        <Section>
                            <header>
                                <p className="name">Teacher {teacher.name}</p>
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
                })}
            </>
        )
    } else {
        return (
            <>
                <Buttons>
                    <button onClick={() => { setChooseStudent(true) }}>Ver estudantes</button>
                    <button onClick={() => { setChooseStudent(false) }}>Aulas agendadas</button>
                </Buttons>
                {chooseStudent === true && userData.type === 'teacher' ? students.map(student => {
                    return (
                        <Section>
                            <header>
                                <p className="name">Student {student.name}</p>
                                <img src={student.image} alt="teacher" />
                            </header>
                            <p className="text">{student.text}</p>
                            <footer>
                                <a href={student.mbti.link}>{student.mbti.name}</a>
                            </footer>
                        </Section>
                    )
                }) : <p>opa</p>}
            </>
        )
    }
}

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
`;

const Buttons = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    padding: 20px;

    button {
        background-color: #000;
        font-family: 'Oswald';
        color: white;
        width: 200px;
        height: 50px;
        border-radius: 6px;
        cursor: pointer;
    }
`

const Title = styled.div`
    font-family: 'Oswald';
    color: #fedc00;
    font-size: 22px;
    margin-top: 10px;
`