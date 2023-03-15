import userImg from "../assets/images/pongebob.png"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default function HeaderHomeUser() {
    return (
        <>
            <ContainerHabitsPage />
            <HeaderPageDesktop />

            <DesktopHomePage>
                TrackIt
            </DesktopHomePage>
            <DesktopImg src={userImg} alt="User img" />
        </>
    );
}

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

const DesktopImg = styled.img`
    position: absolute;
    width: 51px;
    height: 51px;
    right: 18px;
    top: 9px;
    border-radius: 50%;
`;

const ContainerHabitsPage = createGlobalStyle`
    body{
        background-color: #E5E5E5;
    }
`;