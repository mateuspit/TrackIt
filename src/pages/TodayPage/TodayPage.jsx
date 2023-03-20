import styled from "styled-components";
import HeaderHomeUser from "../../components/HeaderHomeUser";
import FooterHabits from "../../components/FooterHabits";
import { useEffect } from "react";
import { useContext } from 'react';
import { UserContext } from "../../components/UserContext";
import axios from "axios";
import React from "react";

export default function TodayPage() {

    const { config, userData } = useContext(UserContext);
    const [habitsList, setHabitsList] = React.useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
        promise.then((response) => {
            console.log(response);
            const habits = response.data;
            console.log(habits);
            setHabitsList(habits);
        });
        promise.catch((response) => {
            alert(response.response.data.message);
        });
    }, []);

    function plotTodayDate() {
        const todayDate = new Date();
        let weekDay = "";
        // console.log(todayDate.getDay())
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
            <DayStats>{weekDay}, {monthDay}/{month}</DayStats>
        );
    }

    function plotPercentFinishedHabits() {
        console.log(habitsList);
        console.log(habitsList.length);
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
            const totalHabits = habitsList.lenght;
            const percentOfFinisehdHabits = (numberOfFinishedHabits * 100) / totalHabits;
            if (numberOfFinishedHabits === 0) {
                return (
                    <NoHabitsFinishedPercent>Nenhum hábito concluído ainda</NoHabitsFinishedPercent>
                );
            } else {
                return (
                    <>
                        <HabitsFinishedPercent>{percentOfFinisehdHabits} dos hábitos concluídos</HabitsFinishedPercent>
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
        if (done && (currentSequence > recordSequence)) {
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

    function plotHabits() {
        if (habitsList.length !== 0) {
            return (
                <div>
                    {habitsList.map((habits) =>
                        <>
                            <ContainerHabitsStats>
                                <HabitTitle>{habits.name}</HabitTitle>
                                <ContainerTodayStats>
                                    <SequenceAndRecordTitle>Sequência atual:&nbsp;</SequenceAndRecordTitle>
                                    {daySequence(habits.currentSequence, habits.done)}
                                    {/* <MakeTodayOrBrokeRecord>{" "}3 dias</MakeTodayOrBrokeRecord> */}
                                </ContainerTodayStats>
                                <ContainerTodayStats>
                                    <SequenceAndRecordTitle>Seu recorde:&nbsp;</SequenceAndRecordTitle>
                                    {recordSequence(habits.highestSequence, habits.currentSequence, habits.done)}
                                    {/* <NotMakeTodayOrNotBrokeRecord>5 dias</NotMakeTodayOrNotBrokeRecord> */}
                                </ContainerTodayStats>
                                <BigDailyCheck type="checkbox" />
                            </ContainerHabitsStats>
                        </>
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
                {/* <DayStats>Segunda, 17/05</DayStats> */}
                {plotPercentFinishedHabits()}
                {/* <HabitsFinishedPercent>67% dos hábitos concluídos</HabitsFinishedPercent> */}
                {plotHabits()}
                {/* <ContainerHabitsStats>
                    <HabitTitle>Ler 1 capitulo de livro</HabitTitle>
                    <ContainerTodayStats>
                        <SequenceAndRecordTitle>Sequência atual:&nbsp;</SequenceAndRecordTitle>
                        <MakeTodayOrBrokeRecord>{" "}3 dias</MakeTodayOrBrokeRecord>
                    </ContainerTodayStats>
                    <ContainerTodayStats>
                        <SequenceAndRecordTitle>Seu recorde:&nbsp;</SequenceAndRecordTitle>
                        <NotMakeTodayOrNotBrokeRecord>5 dias</NotMakeTodayOrNotBrokeRecord>
                    </ContainerTodayStats>
                    <BigDailyCheck type="checkbox" />
                </ContainerHabitsStats> */}

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
    /* Add if not using autoprefixer */
    -webkit-appearance: none;
    appearance: none;
    /* For iOS < 15 to remove gradient background */
    background-color: #fff;
    /* Not removed via appearance */
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
        /* background-color: red; */
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
    /* background-color: rebeccapurple; */
    width: 100%;
    margin-top: 28px;
    padding-left: 17px;
`;

const ContainerIphone8 = styled.div`
    width: 375px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* background-color: #E5E5E5; */
    margin: auto;
    /* margin-top: 68px; */
`;