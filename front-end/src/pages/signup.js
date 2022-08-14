import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../repository/API";
import authStyle from "../styles/authStyle";
import teachImage from "../assets/teachImage.jpg";

const { Main, SiteInformation, Forms, SelectLabel, AuthInput, AuthSelect, AuthButton, StyledLink } = authStyle;

export default function Signin() {
    const navigate = useNavigate();
    const [valid, setValid] = useState(true); // check if email and password are correct
    const [loading, setLoading] = useState(false); //show load image

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

        const body = {
            name: e.target[1].value,
            email: e.target[2].value,
            password: e.target[3].value,
            image: e.target[4].value,
            text: e.target[5].value,
            mbtiId: e.target[6].value,
            disciplineId: e.target[7].value
        };

        API.loginUser(body)
            .then(response => {
                localStorage.setItem("data", JSON.stringify(response.data));
                navigate("/timeline");
            }).catch(error => {
                setValid(false);
                setLoading(false);
                console.log(error);
            });
    };

    function SendData() {
        if (loading) {
            return (
                <img src="" alt="loading" />
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
            </Forms>



            {!valid ? <p>Email or password incorrect...</p> : <></>}
        </Main>
    );
};