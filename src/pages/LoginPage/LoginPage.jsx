import styled from "styled-components";
import fullLogo from "../../assets/images/logo-completa.svg"
import { ThreeDots } from 'react-loader-spinner'
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function LoginPage() {

    const [loginPageDisable, setLoginPageDisable] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const navigate = useNavigate();

    function getLoginData(event) {
        event.preventDefault();
        setLoginPageDisable(true);
        const loginSendableObject = {
            email: email,
            password: password
        };
        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', loginSendableObject);
        promise.then((response) => {
            // alert("Deu");
            setLoginPageDisable(false);
            // const userToken = response.
            // console.log(response);
            const userToken = response.data.token;
            const userImage = response.data.image;
            console.log(userToken);
            console.log(userImage);
            navigate('/hoje');
            // const config = {
            //     headers: {
            //         "Authorization": `Bearer ${userToken}`
            //     }
            // }
        });
        promise.catch((response) => {
            alert(response.response.data.message);
            setLoginPageDisable(false);
            setPassword("");
        });
    }

    function loginPageFunction() {
        if (!loginPageDisable) {
            return (
                <>
                    <StandardInput required type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" />
                    <StandardInput required type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" />
                    <LoginSignInButton type="submit">
                        Entrar
                    </LoginSignInButton>

                    <LoginPageFooter>
                        <Link to={`/cadastro`}>
                            Não tem uma conta? Cadastre-se!
                        </Link>
                    </LoginPageFooter>


                </>
            );
        }
        else {
            return (
                <>
                    <StandarInputDisable disabled value={email} type="email" placeholder="email" />
                    <StandarInputDisable disabled value={password} type="password" placeholder="senha" />
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
                        Não tem uma conta? Cadastre-se!
                    </LoginPageFooterDisable>
                </>
            );
        }
    }



    return (
        <ContainerIphone8>
            <Logo src={fullLogo} alt="Logo" />
            <FormContainer onSubmit={getLoginData}>

                {loginPageFunction()}

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
    cursor: pointer;
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
    cursor: pointer;
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
