import styled from "styled-components";
import HeaderHomeUser from "../../components/HeaderHomeUser";
import FooterHabits from "../../components/FooterHabits";
import { useEffect } from "react";
import { useContext } from 'react';
import { UserContext } from "../../components/UserContext";
import axios from "axios";
import React from "react";

export default function TodayPage() {

    const { config, setUserPorcent, setUserHabits } = useContext(UserContext);
    const [habitsList, setHabitsList] = React.useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then((response) => {
            const habits = response.data;
            setHabitsList(habits);
            setUserHabits(habits);
        });
        promise.catch((response) => {
            alert(response.response.data.message);
        });
    }, []);

    function plotTodayDate() {
        const todayDate = new Date();
        let weekDay = "";
        switch (todayDate.getDay()) {
            case 0:
                weekDay = "Domingo";
                break;
            case 1:
                weekDay = "Segunda";
                break;
            case 2:
                weekDay = "Terça";
                break;
            case 3:
                weekDay = "Quarta";
                break;
            case 4:
                weekDay = "Quinta";
                break;
            case 5:
                weekDay = "Sexta";
                break;
            case 6:
                weekDay = "Sábado";
                break;
        }
        const monthDay = todayDate.getDate();
        const month = todayDate.getMonth();
        return (
            <DayStats data-test="today">{weekDay}, {monthDay}/{month}</DayStats>
        );
    }

    function plotPercentFinishedHabits() {
        if (habitsList.length === 0) {
            return (
                <>
                    <NoHabitsFinishedPercent>
                        Não existem hábitos para hoje!
                    </NoHabitsFinishedPercent>
                </>
            );
        }
        else {
            const numberOfFinishedHabits = habitsList.filter(habit => habit.done).length;
            const totalHabits = habitsList.length;
            const percentOfFinisehdHabits = (numberOfFinishedHabits * 100) / totalHabits;
            setUserPorcent(percentOfFinisehdHabits);
            if (numberOfFinishedHabits === 0) {
                return (
                    <NoHabitsFinishedPercent data-test="today-counter">Nenhum hábito concluído ainda</NoHabitsFinishedPercent>
                );
            } else {
                return (
                    <>
                        <HabitsFinishedPercent data-test="today-counter">{percentOfFinisehdHabits.toFixed(0)}% dos hábitos concluídos</HabitsFinishedPercent>
                    </>
                );
            }
        }
    }

    function daySequence(currentSequence, done) {
        if (done) {
            return (
                <>
                    <MakeTodayOrBrokeRecord>{currentSequence + 1}</MakeTodayOrBrokeRecord>
                </>
            );
        }
        else {
            return (
                <>
                    <NotMakeTodayOrNotBrokeRecord>{currentSequence}</NotMakeTodayOrNotBrokeRecord>
                </>
            );
        }
    }

    function recordSequence(recordSequence, currentSequence, done) {
        if (done && (currentSequence === recordSequence)) {
            return (
                <>
                    <MakeTodayOrBrokeRecord>{currentSequence + 1}</MakeTodayOrBrokeRecord>
                </>
            );
        }
        else {
            return (
                <>
                    <NotMakeTodayOrNotBrokeRecord>{currentSequence}</NotMakeTodayOrNotBrokeRecord>
                </>
            );
        }
    }


    function markAndDesmarkFunction(e, habits) {
        if (e.target.checked) {
            const habitID = habits.id;
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitID}/check`, {}, config);
            promise.then(() => {
                const newHabitsList = habitsList.map((h) => {
                    if (h.id === habits.id) {
                        return { ...h, done: true };
                    }
                    return h;
                });
                setHabitsList(newHabitsList);
            });
            promise.catch((response) => {
                alert(response.response.data.message);
            });
        }
        else {
            const habitID = habits.id;
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitID}/uncheck`, {}, config);
            promise.then((response) => {
                const newHabitsList = habitsList.map((h) => {
                    if (h.id === habits.id) {
                        return { ...h, done: false };
                    }
                    return h;
                });
                setHabitsList(newHabitsList);
            });
            promise.catch((response) => {
                alert(response.response.data.message);
            });
        }
    }

    function plotHabits() {
        if (habitsList.length !== 0) {
            return (
                <div>
                    {habitsList.map((habits) =>

                        <ContainerHabitsStats key={habits.id} data-test="today-habit-container">
                            <HabitTitle data-test="today-habit-name">{habits.name}</HabitTitle>
                            <ContainerTodayStats data-test="today-habit-sequence">
                                <SequenceAndRecordTitle >Sequência atual:&nbsp;</SequenceAndRecordTitle>
                                {daySequence(habits.currentSequence, habits.done)}
                            </ContainerTodayStats>
                            <ContainerTodayStats data-test="today-habit-record">
                                <SequenceAndRecordTitle>Seu recorde:&nbsp;</SequenceAndRecordTitle>
                                {recordSequence(habits.highestSequence, habits.currentSequence, habits.done)}
                            </ContainerTodayStats>
                            <BigDailyCheck data-test="today-habit-check-btn" checked={habits.done} onChange={() => { }} onClick={(e) => markAndDesmarkFunction(e, habits)} type="checkbox" />
                        </ContainerHabitsStats>

                    )}
                </div>
            );
        }
    }

    return (
        <>
            <HeaderHomeUser />
            <ContainerIphone8>

                {plotTodayDate()}

                {plotPercentFinishedHabits()}

                {plotHabits()}

            </ContainerIphone8>
            <FooterHabits />
        </>
    );
}

const BigDailyCheck = styled.input`
    position: absolute;
    top: 13px;
    right: 13px;
    &[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: white;
    width: 69px;
    height: 69px;
    background: #EBEBEB;
    border: 1px solid EBEBEB;
    border-radius: 5px;
    }
    &[type="checkbox"]::before {
        content: "✔";
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 69px;
        height: 69px;
        }
    &[type="checkbox"]:checked {
        content: "✔";
        font-size: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 69px;
        height: 69px;
        background-color: #8FC549;
    }
`;

const ContainerTodayStats = styled.p`
    display: flex;
    margin-left: 15px;
`;
const NotMakeTodayOrNotBrokeRecord = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`;

const MakeTodayOrBrokeRecord = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #8FC549;
`;

const SequenceAndRecordTitle = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`;

const HabitTitle = styled.h3`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-left: 15px;
    padding-top: 13px;
    margin-bottom: 7px;
`;

const HabitsFinishedPercent = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
    padding-left: 17px;
    margin-bottom: 18px;
`;

const NoHabitsFinishedPercent = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    padding-left: 17px;
    margin-bottom: 18px;
`;

const ContainerHabitsStats = styled.div`
    position: relative;
    margin-left: 17px;
    margin-right: 17px;
    margin-top: 10px;
    width: 340px;
    height: 94px;
    background: #FFFFFF;
    border-radius: 5px;
`;

const DayStats = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    width: 100%;
    margin-top: 28px;
    padding-left: 17px;
`;

const ContainerIphone8 = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-bottom: 80px;
`;