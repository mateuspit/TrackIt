import styled from "styled-components";
import fullLogo from "../../assets/images/logo-completa.svg"
import { Link } from "react-router-dom";
import React from "react";
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignInPage() {
    const [signInPageDisable, setSignInPageDisable] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [photo, setPhoto] = React.useState("");
    const navigate = useNavigate();

    function getSignInData(event) {
        event.preventDefault();
        setSignInPageDisable(true);
        const signInSendableObject = {
            email: email,
            password: password,
            image: photo,
            name: name
        };
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', signInSendableObject);
        promise.then((response) => {
            setSignInPageDisable(false);
            console.log(response);
            navigate('/');
        });
        promise.catch((response) => {
            alert(response.response.data.message);
            setSignInPageDisable(false);
        });
    }

    function signInPageFunction() {
        if (!signInPageDisable) {
            return (
                <>
                    <StandardInput required
                        type="email"
                        value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="email" />
                    <StandardInput required
                        value={password} onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="senha" />
                    <StandardInput required
                        type="text"
                        value={name} onChange={e => setName(e.target.value)}
                        placeholder="nome" />
                    <StandardInput required
                        value={photo} onChange={e => setPhoto(e.target.value)}
                        placeholder="foto" />
                    <LoginSignInButton type="submit">
                        Cadastrar
                    </LoginSignInButton>
                    <LoginPageFooter>
                        <Link to={`/`}>
                            Já tem uma conta? Faça login!
                        </Link>
                    </LoginPageFooter>
                </>
            );
        }
        else {
            return (
                <>
                    <StandarInputDisable disabled
                        type="email"
                        value={email}
                        placeholder="email" />
                    <StandarInputDisable disabled
                        value={password}
                        type="password"
                        placeholder="senha" />
                    <StandarInputDisable disabled
                        type="text"
                        value={name}
                        placeholder="nome" />
                    <StandarInputDisable disabled
                        value={photo}
                        placeholder="foto" />
                    <LoginSignInButtonDisable type="submit">
                        <ThreeDots
                            height="80"
                            width="80"
                            radius="9"
                            color="#ffffff"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                        />
                    </LoginSignInButtonDisable>
                    <LoginPageFooterDisable>
                        <Link to={`/`}>
                            Já tem uma conta? Faça login!
                        </Link>
                    </LoginPageFooterDisable>
                </>
            );
        }
    }

    return (
        <ContainerIphone8>
            <Logo src={fullLogo} alt="Logo" />
            <FormContainer onSubmit={getSignInData}>


                {signInPageFunction()}


            </FormContainer>
        </ContainerIphone8>
    );
}

const LoginPageFooterDisable = styled.p`
    pointer-events: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
    a{
        text-decoration: none;
        &:link, &:visited {
            color: #52B6FF;
            text-decoration: none;
            cursor: pointer;
        }
        &:link:active, &:visited:active {
            color: #52B6FF;
        }
    }
`;

const LoginSignInButtonDisable = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 303px;
    height: 45px;
    background: #52B6FF;
    opacity: 0.7;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    pointer-events: none;
`;

const StandarInputDisable = styled.input`
    pointer-events: none;
    color: #AFAFAF;  
    /* color: red;   */
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;    
    padding-left: 11px; 
    &::placeholder {
        color: #DBDBDB;
    }     
`;

const ContainerIphone8 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* margin: auto; */
    margin-top: 68px;
`;

const Logo = styled.img`
    width: 180px;
`;

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`;

const StandardInput = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    color: #666666;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;    
    padding-left: 11px;
    &::placeholder {
        color: #DBDBDB;
    }
`;

const LoginSignInButton = styled.button`
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;
    color: #FFFFFF;
    border: none;
`;

const LoginPageFooter = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
    a{
        text-decoration: none;
        &:link, &:visited {
            color: #52B6FF;
            text-decoration: none;
            cursor: pointer;
        }
        &:link:active, &:visited:active {
            color: #52B6FF;
        }
    }
`;
