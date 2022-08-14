import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../repository/API";
import authStyle from "../styles/authStyle";
import teachImage from "../assets/image/teachImage.jpg";

const { Main, SiteInformation, Forms, SelectLabel, AuthInput, AuthSelect, AuthButton, StyledLink } = authStyle;

export default function Signin() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false); //show load image
    const [errorMessage, setErrorMessage] = useState(null);
    const [valid, setValid] = useState(true);

    const allMBTI = [
        'INTP – Lógico',
        'ENTP – Inovador',
        'ENTJ – Comandante',
        'INTJ – Arquiteto',
        'ESFP – Animador',
        'ISFP – Aventureiro',
        'ESTP – Empreendedor',
        'ENFP – Ativista',
        'INFP – Mediador',
        'ENFJ – Protagonista',
        'INFJ – Conselheiro',
        'ESTJ – Executivo',
        'ISTJ – Inspetores',
        'ISFJ – Defensor',
        'ESFJ – provedor',
    ];

    const disciplines = ['Física', 'Matemática', 'Química', 'Robótica/engenharia', 'STEM'];

    function submitForm(e) {
        e.preventDefault();
        setLoading(true);

        const type = e.target[0].value;

        const body = {
            name: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            image: e.target[4].value,
            text: e.target[5].value,
            mbtiId: parseInt(e.target[6].value),
            disciplineId: parseInt(e.target[7].value)
        };

        API.createUser(type, body)
            .then(response => {
                navigate("/");
            }).catch(error => {
                setLoading(false);
                setValid(false)
                setErrorMessage(error.message)
                console.log("createUser error -->", error);
            });
    };

    function SendData() {
        if (loading) {
            return (
                <AuthButton
                    type="submit"
                    disabled={loading ? true : false}
                    style={loading ? { opacity: "0.7" } : {}}
                >
                    carregando...
                </AuthButton>
            );
        } else {
            return (
                <AuthButton
                    type="submit"
                    disabled={loading ? true : false}
                    style={loading ? { opacity: "0.7" } : {}}
                >
                    Sign Up
                </AuthButton>
            );
        }
    };

    return (
        <Main>
            <SiteInformation>
                <h1>TeachBuild</h1>
                <img src={teachImage} alt="educação" />
                <p>Encontramos o professor ideal para você com base na sua personalidade e necessidades.</p>
            </SiteInformation>
            <Forms>
                <form onSubmit={e => submitForm(e)}>
                    <AuthSelect id="type" name="type">
                        <option value="teacher">I'm a teacher</option>
                        <option value="student">I'm a student</option>
                    </AuthSelect>
                    <AuthInput
                        type="text"
                        placeholder="name"
                        required
                    ></AuthInput>
                    <AuthInput
                        type="email"
                        placeholder="e-mail"
                        required
                    ></AuthInput>
                    <AuthInput
                        type="password"
                        placeholder="password"
                        minLength={6}
                        required
                    ></AuthInput>
                    <AuthInput
                        type="url"
                        placeholder="image link"
                        required
                    ></AuthInput>
                    <AuthInput
                        type="text"
                        placeholder="about you"
                        required
                    ></AuthInput>
                    <AuthSelect id="mbti" name="mbtiId" size="1">
                        <option value="" disabled selected>Select your MBTI</option>
                        {allMBTI.map(mbti => {
                            return (
                                <option value={allMBTI.indexOf(mbti) + 1}>{mbti}</option>
                            )
                        })}
                    </AuthSelect>
                    <AuthSelect id="discipline" name="disciplineId" size="1">
                        <option value="" disabled selected>Select your discipline</option>
                        {disciplines.map(discipline => {
                            return (
                                <option value={disciplines.indexOf(discipline) + 1}>{discipline}</option>
                            )
                        })}
                    </AuthSelect>
                    <SendData />
                </form>
                <StyledLink to="/">You have an account? Do sign in!</StyledLink>
                {!valid ? <p>{errorMessage}</p> : <></>}
            </Forms>
        </Main>
    );
};