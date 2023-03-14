import styled from "styled-components";
import fullLogo from "../../assets/images/logo-completa.svg"

export default function LoginPage() {
    return (
        <ContainerIphone8>
            <Logo src={fullLogo} alt="Logo" />
            <FormContainer>
                <StandardInput required placeholder="email" />
                <StandardInput required placeholder="senha" />
                <HomePageButton type="submit">
                    Entrar
                </HomePageButton>
                <HomePageFooter>
                    Não tem uma conta? Cadastre-se!
                </HomePageFooter>
            </FormContainer>
        </ContainerIphone8>
    );
}

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
    color: black;
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

const HomePageButton = styled.button`
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

const HomePageFooter = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
    margin-top: 25px;
`;
