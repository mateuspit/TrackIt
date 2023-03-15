import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import userImg from "../../assets/images/pongebob.png"

export default function HabitsPage() {
    return (
        <>
            <ContainerHabitsPage />
            <HeaderPageDesktop />

            <DesktopHomePage>
                TrackIt
            </DesktopHomePage>
            <DesktopImg src={userImg} alt="User img" />

            <ContainerIphone8>
                <HabitsHeader>
                    <HabitsTitle>Meus hábitos</HabitsTitle>
                    <NewHabitButton>+</NewHabitButton>
                </HabitsHeader>
            </ContainerIphone8>
            <FooterPageDesktop />
        </>
    );
}

const HabitsHeader = styled.div`
    display: flex;
`;

const NewHabitButton = styled.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    color: white;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HabitsTitle = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-left: 17px;
`;

const ContainerHabitsPage = createGlobalStyle`
    body{
        background-color: #E5E5E5;
    }
`;

const DesktopImg = styled.img`
    position: absolute;
    width: 51px;
    height: 51px;
    right: 18px;
    top: 9px;
    border-radius: 50%;
`;

const DesktopHomePage = styled.p`
    position: absolute;
    width: 97px;
    height: 49px;
    left: 18px;
    top: 10px;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
`;
const HeaderPageDesktop = styled.header`
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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

const ContainerIphone8 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #E5E5E5;
    /* margin: auto; */
    /* margin-top: 68px; */
`;