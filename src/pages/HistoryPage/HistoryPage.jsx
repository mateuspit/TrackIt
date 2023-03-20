import styled from "styled-components";
import FooterHabits from "../../components/FooterHabits";
import HeaderHomeUser from "../../components/HeaderHomeUser";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'
import { formatDate } from "react-calendar/dist/esm/shared/dateFormatter";

function paintSomeDays(date, view){
    
    if((date.getDate() === 27 && date.getMonth() === 1) || 
    (date.getDate() === 13 && date.getMonth() === 2) || 
    (date.getDate() === 1 && date.getMonth() === 2) || 
    (date.getDate() === 8 && date.getMonth() === 2)
    || (date.getDate() === 10 && date.getMonth() === 2)
    || (date.getDate() === 17 && date.getMonth() === 2)
    || (date.getDate() === 3 && date.getMonth() === 2)){
        // console.log(date);
        return "days-did";
    }
    else if (
        (date.getDate() === 6 && date.getMonth() === 2)|| 
        (date.getDate() === 20 && date.getMonth() === 2)|| 
        (date.getDate() === 15 && date.getMonth() === 2)){
        return "day-not-did"
    }
}

export default function HistoryPage() {
    return (
        <>
            <HeaderHomeUser />
            <ContainerIphone8>
                <PageHistoryTitle>Histórico</PageHistoryTitle>
                {/* <StyledCalendar formatDay={(locale, date) => formatDate(date, 'd')} calendarType="US" locale="pt"/> */}
                <StyledCalendar 
                data-test="calendar"
                tileClassName={({ activeStartDate, date, view }) => paintSomeDays(date,view)}
                calendarType="US" 
                locale="pt"/>
            </ContainerIphone8>
            <FooterHabits />
        </>
    );
}

const StyledCalendar = styled(Calendar)`
    &&{
        border: none;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        width: 335px;
        height: 402px;
        margin-left: 19px;
    }
    .react-calendar__tile--active {
        background: #006edc;
        color: white;
        /* background-clip: padding-box; */
        border-radius: 50%;
        abbr{
            transform: scale(1.25);
            font-size: 15px;
        }
    }
    .react-calendar__month-view__days__day{
        /* color: aqua; */
        margin-bottom: 5px;
        margin-top: 10px;
        font-size: 12px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
    }
    .days-did{
        /* color: aqua; */
        background-color: #8cc654;
        border-radius: 50%;
    }
    .day-not-did{
        background-color: #ea5766;
        border-radius: 50%;
    }
`;

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