import { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/header";
import API from "../repository/API";

export default function TeacherPage() {
    const userData = JSON.parse(localStorage.getItem("data"));
    const days = ["seg", "ter", "qua", "qui", "sex", "sab", "dom"];
    const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const requestsHours = []; //request with hours from table;

    const config = {
        headers: {
            authorization: `Bearer ${userData.token}`
        }
    };

   /*  useEffect(() => {
        API.createRequests(config, allRequests)
    }, []) */

    function Hour({ hourstart, i, day }) {
        console.log(requestsHours)
        const [click, setClick] = useState(true);
        return (
            <div className={click ? "no" : "yes"} onClick={() => {
                setClick(!click);
                if (click === true) {
                    requestsHours.push({day, hourstart, teacherId: userData.id})
                } else {
                    requestsHours.splice(requestsHours.indexOf(hours[i]), 1)
                }
            }}>
                <h2>{hourstart}</h2>
            </div>
        )
    }

    function CreateHours({day}) {
        const components = [];
        let hourstart = null;
        for (let i = 0; i < hours.length; i++) {
            if (hours[i] < 10) {
                hourstart = `0${hours[i]}:00`
            } else {
                hourstart = `${hours[i]}:00`
            }
            components.push(
                <Hour hourstart={hourstart} i={i} day={day}/>
            )
        };

        return components;
    }
    return (
        <Main>
            <Header />
            <Title>Página do Professor</Title>
            <Subtitle>Disponibilidade na plataforma</Subtitle>
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
    margin-bottom: 20px
`

const Subtitle = styled.p`
    font-size: 18px;
    color: white;
    font-family: 'Oswald';
    margin-bottom: 10px;
`

