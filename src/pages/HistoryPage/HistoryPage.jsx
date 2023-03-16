import styled from "styled-components";
import FooterHabits from "../../components/FooterHabits";
import HeaderHomeUser from "../../components/HeaderHomeUser";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

export default function HistoryPage() {
    return (
        <>
            <HeaderHomeUser />
            <ContainerIphone8>
                <PageHistoryTitle>Histórico</PageHistoryTitle>
                <Calendar calendarType="US" locale="pt"/>
            </ContainerIphone8>
            <FooterHabits />
        </>
    );
}

const ContainerIphone8 = styled.div`
    width: 375px;
    /* background-color: renpm install react-calendard; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: #E5E5E5; */
    margin: auto;
    /* margin-top: 68px; */
`;

const PageHistoryTitle = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-top: 28px;
    margin-bottom: 11px;
    margin-left: 17px;
`;