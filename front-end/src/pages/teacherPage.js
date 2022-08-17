import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/header";
import API from "../repository/API";

export default function TeacherPage() {
    const userData = JSON.parse(localStorage.getItem("data"));
    console.log(userData)
    const navigate = useNavigate()
    const days = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];
    const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const allRequests = []; //request with hours from table;
    const [chooseRequestView, setChooseRequestView] = useState(true);
    const [requestsData, setRequestsData] = useState([]);

    const config = {
        headers: {
            authorization: `Bearer ${userData.token}`
        }
    };

    function Hour({ hourstart, i, day }) {
        const [click, setClick] = useState(true);
        return (
            <div className={click ? "no" : "yes"} onClick={() => {
                setClick(!click);
                if (click === true) {
                    allRequests.push({ day, hourstart, teacherId: userData.id })
                } else {
                    allRequests.splice(allRequests.indexOf(hours[i]), 1)
                }
            }}>
                <h2>{hourstart}</h2>
            </div>
        )
    }

    function CreateHours({ day }) {
        const components = [];
        let hourstart = null;
        for (let i = 0; i < hours.length; i++) {
            if (hours[i] < 10) {
                hourstart = `0${hours[i]}:00`
            } else {
                hourstart = `${hours[i]}:00`
            }
            components.push(
                <Hour hourstart={hourstart} i={i} day={day} />
            )
        };

        return components;
    }

    function CreateHoursExist({ day }) {
        const dayRequests = [];

        requestsData.forEach(element => {
            if (element.day === day) {
                dayRequests.push(element);
            }
        });

        const components = [];
        let name = null;
        let hourstart = null;
        for (let i = 0; i < hours.length; i++) {
            if (hours[i] < 10) {
                hourstart = `0${hours[i]}:00`
            } else {
                hourstart = `${hours[i]}:00`
            }

            for (let j = 0; j < dayRequests.length; j++) {
                if (hourstart === dayRequests[j].hourstart) {
                    name = true;
                    break
                } else {
                    name = false
                }
            }
            components.push(
                <div className={name ? 'yes' : 'no'}>
                    <h2>{hourstart}</h2>
                </div>
            )
        }
        return components;
    }
    return (
        <Main>
            <Header />
            <Title>Página do Professor</Title>
            <Subtitle>Disponibilidade na plataforma</Subtitle>
            <Buttons>
                <button
                    className={chooseRequestView ? 'yes' : 'no'}
                    onClick={() => { setChooseRequestView(true) }}
                >Criar nova Disponibilidade</button>
                <button
                    className={chooseRequestView ? 'no' : 'yes'}
                    onClick={async () => {
                        setChooseRequestView(false);
                        await API.getRequestsToTeacher(config, userData.id)
                        .then(response => {
                            setRequestsData(response.data);
                        }).catch(error => {
                            console.log(error);
                        })
                    }}
                >Ver meus horários existentes</button>
            </Buttons>
            {chooseRequestView
                ?
                <>
                    <Schedule>
                        {days.map(day => {
                            return (
                                <DaySpace>
                                    <p>{day}</p>
                                    <section>
                                        <CreateHours day={day} />
                                    </section>
                                </DaySpace>
                            )
                        })}
                    </Schedule>
                    <button className="send" onClick={async () => {
                        await API.createRequests(config, allRequests).catch(error => console.log(error));
                        navigate('/teacherpage')
                    }}>Enviar</button>
                    <Footer>
                        <Likes>
                            <p>{userData.likes}</p> 
                        </Likes>
                        <Wallet>
                            <p>{userData.Wallet}</p>
                        </Wallet>
                    </Footer>
                </>

                :
                <Schedule>
                    {requestsData.length === 0
                        ?
                        <p>carregando...</p>
                        :
                        days.map(day => {
                            return (
                                <DaySpace>
                                    <p>{day}</p>
                                    <section>
                                        <CreateHoursExist day={day} />
                                    </section>
                                </DaySpace>
                            )
                        })
                    }
                </Schedule>
            }

        </Main>
    )
}

const Main = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    align-items: center;
    background-color: #333;
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: auto;

    .send{
        width: 80px;
        height: 30px;
        color: white;
        background-color: #000;
        font-size: 16px;
        font-family: 'Oswald';
        border-radius: 5px;
        margin-bottom: 50px;
        cursor: pointer;
    }

    .send:hover{
        background-color: #fedc00;
        color: #000
    }
`;

const Schedule = styled.div`
    width: 80%;
    height: auto;
    margin-bottom: 20px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
`

const DaySpace = styled.section`
    width:100px;
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 6px;

    p {
        font-size: 20px;
        font-family: 'Oswald';
        color: white;
        margin-bottom: 20px;
        color: #fedc00
    }

    h2 {
        font-size: 14px;
    }

    section {
        width: 100px;
        background-color: gray;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .yes {
        background-color: #fedc00;
        border-radius: 6px;
        margin-bottom: 2px;
        width: 80px;
        height: 20px;
        padding: 3px;
        cursor: pointer;
    }

    .no {
        background-color: rgba(85, 82, 82, 0.874);
        border-radius: 6px;
        margin-bottom: 2px;
        width: 80px;
        height: 20px;
        padding: 3px;
        cursor: pointer;
    }
`

const Title = styled.h1`
    font-size: 32px;
    color: #fedc00;
    font-family: 'Oswald';
    margin-bottom: 20px;
`

const Subtitle = styled.p`
    font-size: 18px;
    color: white;
    font-family: 'Oswald';
    margin-bottom: 10px;
`

const Buttons = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100vw;
    padding: 20px;

    .yes {
        background-color: #fedc00;
        font-family: 'Oswald';
        color: #000;
        width: 200px;
        height: 50px;
        border-radius: 6px;
        cursor: pointer;
    }

    .no {
        background-color: #000;
        font-family: 'Oswald';
        color: white;
        width: 200px;
        height: 50px;
        border-radius: 6px;
        cursor: pointer;
    }
`

const Footer = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`

const Likes = styled.div`
    width: 100px;
    height: 50px;
    background-color: #000;
    border-radius: 6px;
    p {
        font-size: 16px;
        font-family: 'Oswald';
        color: white
    }
`
const Wallet = styled.div`
    width: 100px;
    height: 50px;
    background-color: #000;
    border-radius: 6px;
    p {
        font-size: 16px;
        font-family: 'Oswald';
        color: white
    }
`