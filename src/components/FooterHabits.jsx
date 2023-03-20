import styled from "styled-components";
import { Link } from "react-router-dom";

export default function FooterHabits() {
    return (
        <>
            <FooterPageDesktop>
                <ContainerIphone8>
                    <HabitsPageFooter>
                        {/* <FooterButtons>Hábitos</FooterButtons>
                        <FooterButtons>Histórico</FooterButtons>
                        <CircularProgressBar>Hoje</CircularProgressBar> */}
                        <FooterButtons><Link to={`/habitos`}>Hábitos</Link></FooterButtons>
                        <FooterButtons><Link to={`/historico`}>Histórico</Link></FooterButtons>
                        <CircularProgressBar><Link to={`/hoje`}>Hoje</Link></CircularProgressBar>
                    </HabitsPageFooter>
                </ContainerIphone8>
            </FooterPageDesktop>
        </>
    );
}

const ContainerIphone8 = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #E5E5E5; */
    margin: auto;
    /* margin-top: 68px; */
`;

const FooterPageDesktop = styled.footer`
    z-index: 1;
    position:fixed;
    left: 0px;
    bottom: 0px;
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
`;


const CircularProgressBar = styled.div`
    bottom: -10px;
    left: 142px;
    position: absolute;
    z-index: 2;
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    a{
        text-decoration: none;
        &:link, &:visited {
            color: #ffffff;
            text-decoration: none;
            cursor: pointer;
        }
        &:link:active, &:visited:active {
            color: #ffffff;
        }
    }
`;

const FooterButtons = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
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

const HabitsPageFooter = styled.div`
    position: relative;
    width: 100%;
    padding-left: 36px;
    padding-right: 31px;
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
`;