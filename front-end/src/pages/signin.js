import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../repository/API";
import authStyle from "../styles/authStyle";
import teachImage from "../assets/image/teachImage.jpg";

const { Main, SiteInformation, Forms, AuthInput, SelectLabel, AuthSelect, AuthButton, StyledLink } = authStyle;

export default function Signin() {
    const navigate = useNavigate();
    const [valid, setValid] = useState(true);
    const [loading, setLoading] = useState(false); //show load image

    function submitForm(e) {
        e.preventDefault();
        setLoading(true);

        const body = {
            type: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value
        };

        API.loginUser(body)
            .then(response => {
                localStorage.setItem("data", JSON.stringify(response.data));
                navigate("/mainpage");
            }).catch(error => {
                setValid(false);
                setLoading(false);
                console.log(error);
            });
    };

    function SendData() {
        if(loading){
            return(
                <AuthButton
                    type="submit"
                    disabled={loading ? true : false}
                    style={loading ? { opacity: "0.7" } : {}}
                >
                    carregando...
                </AuthButton>
            );
        }else{
            return (
                <AuthButton
                    type="submit"
                    disabled={loading ? true : false}
                    style={loading ? { opacity: "0.7" } : {}}
                >
                    Log In
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
                    <AuthSelect id="type" name="type" placeholder="who are you?">
                        <option value="teacher">I'm a teacher</option>
                        <option value="student">I'm a student</option>
                    </AuthSelect>
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
                    <SendData/>
                </form>
                <StyledLink to="/signup">First time? Create an account!</StyledLink>
                {!valid ? <p>Email or password incorrect...</p> : <></>}
            </Forms>
        </Main>
    );
};