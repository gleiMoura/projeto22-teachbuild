import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { IoIosExit } from "react-icons/io";

export default function Timeline() {
    const navigate = useNavigate();
    const userData = JSON.parse(localStorage.getItem("data"));
    const [thereIsToken, setThereIsToken] = useState(false);

    function logout() {
        localStorage.clear();
        navigate("/");
    };

    useEffect(() => {
        if (!localStorage.getItem("data")) {
            navigate("/");
        } else {
            setThereIsToken(true);
        };
    }, []);

    if (thereIsToken === true) {
        return (
                <Header>
                    <section className="first">
                        <h1 onClick={() => navigate("/userspage")}>TeachBuild</h1>
                    </section>
                    <section className="second">
                        <p>{userData.name.split(" ")[0]}</p>
                        <img src={userData.image} alt="user image" />
                        <IoIosExit className="logout" onClick={() => { logout() }} />
                    </section>
                </Header>
        )
    }
};

const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    margin: 20px 20px;
    padding: 0 20px;
    box-shadow: 1px 1px 18px #fedc00;
    background-color: #000;

    h1 {
    width: 99px;
    height: 50px;
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 45px;
    line-height: 50px;
    letter-spacing: 0.05em;
    color: #fedc00;
    margin-left: 20px;
    cursor: pointer;
  }

  p {
    width: 99px;
    height: 50px;
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    text-align: center;
    line-height: 50px;
    letter-spacing: 0.05em;
    color: #fedc00;
    margin-left: 20px;
    cursor: pointer;
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 50%;
    background-color: white;
    object-fit: cover;
  }

  .second {
    width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .logout {
    font-size: 30px;
    color: #fedc00;
    cursor: pointer;
  }
`

