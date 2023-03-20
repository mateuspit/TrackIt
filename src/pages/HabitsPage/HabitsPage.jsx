import styled from "styled-components";
import { BiTrash } from "react-icons/bi"
import HeaderHomeUser from "../../components/HeaderHomeUser";
import FooterHabits from "../../components/FooterHabits";
import { useContext } from 'react';
import { UserContext } from "../../components/UserContext";
import axios from "axios";
import { useEffect } from "react";
import React from "react";

export default function HabitsPage() {
    const [habitsList, setHabitsList] = React.useState([]);
    const { config, userData, setUserHabits } = useContext(UserContext);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then((response) => {
            console.log(response);
            const habits = response.data;
            setHabitsList(habits);
        });
        promise.catch((response) => {
            alert(response.response.data.message);
        });
    }, []);

    function openNewHabitFormFunction() {
        alert("button")
        return (
            <ContainerNewHabitForm>
                <StandardInput required placeholder="nome do hábito" />
                <ContainerDaysChoise>
                    <CheckBoxContainer>
                        <DayCheckBox letter="D" id="Sunday" type="checkbox" />
                        <CheckBoxLabel htmlFor="Sunday" >D</CheckBoxLabel>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <DayCheckBox letter="S" id="Monday" type="checkbox" />
                        <CheckBoxLabel htmlFor="Monday" >S</CheckBoxLabel>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <DayCheckBox letter="T" id="Tuesday" type="checkbox" />
                        <CheckBoxLabel htmlFor="Tuesday" >T</CheckBoxLabel>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <DayCheckBox letter="Q" id="Wednesday" type="checkbox" />
                        <CheckBoxLabel htmlFor="Wednesday" >Q</CheckBoxLabel>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <DayCheckBox letter="Q" id="Thursday" type="checkbox" />
                        <CheckBoxLabel htmlFor="Thursday" >Q</CheckBoxLabel>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <DayCheckBox letter="S" id="Friday" type="checkbox" />
                        <CheckBoxLabel htmlFor="Friday" >S</CheckBoxLabel>
                    </CheckBoxContainer>
                    <CheckBoxContainer>
                        <DayCheckBox letter="S" id="Saturday" type="checkbox" />
                        <CheckBoxLabel htmlFor="Saturday" >S</CheckBoxLabel>
                    </CheckBoxContainer>
                </ContainerDaysChoise>

                <InputsContainerButtons>
                    <CancelNewHabitButton type="reset">Cancelar</CancelNewHabitButton>
                    <SaveNewHabitButton type="submit">Salvar</SaveNewHabitButton>
                </InputsContainerButtons>
            </ContainerNewHabitForm>
        );
    }

    function existenceOfHabitsFunction() {
        if (habitsList.length === 0) {
            return (
                <>
                    <NoHabitsText>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                    </NoHabitsText>
                </>
            );
        }
    }

    return (
        <>
            <HeaderHomeUser />



            <ContainerIphone8>
                <HabitsHeader>
                    <HabitsTitle>Meus hábitos</HabitsTitle>
                    <NewHabitButton onClick={openNewHabitFormFunction}>+</NewHabitButton>
                </HabitsHeader>

                {/* <ContainerNewHabitForm>
                    <StandardInput required placeholder="nome do hábito" />
                    <ContainerDaysChoise>
                        <CheckBoxContainer>
                            <DayCheckBox letter="D" id="Sunday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Sunday" >D</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox letter="S" id="Monday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Monday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox letter="T" id="Tuesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Tuesday" >T</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox letter="Q" id="Wednesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Wednesday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox letter="Q" id="Thursday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Thursday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox letter="S" id="Friday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Friday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox letter="S" id="Saturday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Saturday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                    </ContainerDaysChoise>

                    <InputsContainerButtons>
                        <CancelNewHabitButton type="reset">Cancelar</CancelNewHabitButton>
                        <SaveNewHabitButton type="submit">Salvar</SaveNewHabitButton>
                    </InputsContainerButtons>
                </ContainerNewHabitForm> */}

                <ContainerHabits>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <ContainerDaysChoise>
                        <TrashDiv><BiTrash size={20} /></TrashDiv>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="D" id="Sunday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Sunday" >D</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="S" id="Monday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Monday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="T" id="Tuesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Tuesday" >T</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="Q" id="Wednesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Wednesday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="Q" id="Thursday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Thursday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="S" id="Friday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Friday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="S" id="Saturday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Saturday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                    </ContainerDaysChoise>
                </ContainerHabits>

                {/* <ContainerHabits>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <ContainerDaysChoise>
                        <TrashDiv><BiTrash size={20} /></TrashDiv>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="D" id="Sunday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Sunday" >D</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="S" id="Monday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Monday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="T" id="Tuesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Tuesday" >T</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="Q" id="Wednesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Wednesday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="Q" id="Thursday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Thursday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="S" id="Friday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Friday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="S" id="Saturday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Saturday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                    </ContainerDaysChoise>
                </ContainerHabits> */}

                {/* <ContainerHabits>
                    <HabitTitle>Ler 1 capítulo de livro</HabitTitle>
                    <ContainerDaysChoise>
                        <TrashDiv><BiTrash size={20} /></TrashDiv>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="D" id="Sunday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Sunday" >D</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="S" id="Monday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Monday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="T" id="Tuesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Tuesday" >T</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="Q" id="Wednesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Wednesday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="Q" id="Thursday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Thursday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked letter="S" id="Friday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Friday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled letter="S" id="Saturday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Saturday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                    </ContainerDaysChoise>
                </ContainerHabits> */}




                {existenceOfHabitsFunction()}
                {/* <NoHabitsText>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabitsText> */}
            </ContainerIphone8>

            <FooterHabits />

        </>
    );
}

const TrashDiv = styled.div`
    position: absolute;
    bottom: 45px;
    right: 10px;
`;

const HabitTitle = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-left: 19px;
    margin-top: 13px;
`;

const ContainerHabits = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
`;

const SaveNewHabitButton = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border: none;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
`;

const InputsContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 29px;
    margin-right: 18px;
`;

const CancelNewHabitButton = styled.button`
    width: 69px;
    height: 20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    background-color: white;
    border:none;
    margin-right: 23px;
`;

const CheckBoxLabel = styled.label`
    position: absolute;
    top: 1px;
    left: 8px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;
`;

const CheckBoxContainer = styled.div`
    position: relative;
    margin-right: 4px;
`;

const DayCheckBox = styled.input`
    width: 30px;
    height: 30px;
    &[type="checkbox"] {
        /* Add if not using autoprefixer */
        -webkit-appearance: none;
        appearance: none;
        /* For iOS < 15 to remove gradient background */
        background-color: #fff;
        /* Not removed via appearance */
        margin: 0;
        font: inherit;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
    }
    &[type="checkbox"]:checked:before {
        content: "${props => props.letter}";
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
    }

    &[type="checkbox"]{
        content: "${props => props.letter}";
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: black;
        display: flex;
        justify-content: center;
    }

    &[type="checkbox"]:checked {
        border: 1px solid #CFCFCF;
        color: white;
        background: #CFCFCF;
    }
    
    &[type="checkbox"]:checked + label {
        display:none;
        color: red;
        text-align: center;
    }

    /* &:checked:before {
        content: "test";
        position: absolute;
        top: 0;
    } */

    /* &:checked {
        content: "S"; código Unicode para o ícone de um carrinho 
        display: inline-block;
        margin-right: 10px;
        font-weight: bold;
        font-size: 20px;
    } */

    /* #Sunday:checked + label[for="Sunday"],
    #Monday:checked + label[for="Monday"],
    #Tuesday:checked + label[for="Tuesday"],
    #Wednesday:checked + label[for="Wednesday"],
    #Thursday:checked + label[for="Thursday"],
    #Friday:checked + label[for="Friday"],
    #Saturday:checked + label[for="Saturday"] {
        background: red;
        color: aqua;
    } */

    /* #Sunday:checked,
    #Monday:checked,
    #Tuesday:checked,
    #Wednesday:checked,
    #Thursday:checked,
    #Friday:checked,
    #Saturday:checked{
        background: #999;
        color: #ffffff;
    } */
`;

const ContainerDaysChoise = styled.div`
    position: relative;
    display: flex;
    margin-left: 19px;
    margin-top: 8px;
`;

const StandardInput = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 8px;
    margin-left: 19px;
    margin-right: 18px;
    margin-top: 18px;
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

const ContainerNewHabitForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-left: 17px;
    margin-right: 18px;
    margin-top: 10px;
`;



const NoHabitsText = styled.div`
    display: flex;
    margin-left: 17px;
    margin-right: 20px;
    margin-top: 28px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;    
`;

const HabitsHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 22px;
    margin-bottom: 10px;
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
    padding-bottom: 5px;
    margin-right: 18px;
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