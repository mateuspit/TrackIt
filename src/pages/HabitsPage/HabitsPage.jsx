import styled from "styled-components";
import { BiTrash } from "react-icons/bi"
import HeaderHomeUser from "../../components/HeaderHomeUser";
import FooterHabits from "../../components/FooterHabits";
import { useContext } from 'react';
import { UserContext } from "../../components/UserContext";
import axios from "axios";
import { useEffect } from "react";
import React from "react";
import { ThreeDots } from 'react-loader-spinner'

export default function HabitsPage() {
    const [habitsList, setHabitsList] = React.useState([]);
    const { config, userData, setUserHabits } = useContext(UserContext);
    const [newHabitForm, setNewHabitForm] = React.useState(false);
    const [newHabit, setNewHabit] = React.useState("");
    const [sundayCheckBox, setSundayCheckBox] = React.useState(false);
    const [mondayCheckBox, setMondayCheckBox] = React.useState(false);
    const [tuesdayCheckBox, setTuesdayCheckBox] = React.useState(false);
    const [wednesdayCheckBox, setWednesdayCheckBox] = React.useState(false);
    const [thursdayCheckBox, setThursdayCheckBox] = React.useState(false);
    const [fridayCheckBox, setFridayCheckBox] = React.useState(false);
    const [saturdayCheckBox, setSaturdayCheckBox] = React.useState(false);
    const [newHabitFormDisable, setNewHabitFormDisable] = React.useState(false);

    useEffect(() => {
        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
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

    function openNewHabitFormFunction() {
        // alert("button");
        if (!newHabitForm) {
            setNewHabitForm(true);
        }
        else {
            setNewHabitForm(false);
            setNewHabitFormDisable(false);
            setNewHabit("");
            setSundayCheckBox(false);
            setMondayCheckBox(false);
            setTuesdayCheckBox(false);
            setWednesdayCheckBox(false);
            setThursdayCheckBox(false);
            setFridayCheckBox(false);
            setSaturdayCheckBox(false);
            setNewHabitFormDisable(false);
        }

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

    function getNewHabit(event) {
        event.preventDefault();
        // alert("peguei dados");
        // console.log(newHabit);
        // console.log(sundayCheckBox);
        // console.log(mondayCheckBox);
        // console.log(tuesdayCheckBox);
        // console.log(wednesdayCheckBox);
        // console.log(thursdayCheckBox);
        // console.log(fridayCheckBox);
        // console.log(saturdayCheckBox);
        if (sundayCheckBox || mondayCheckBox || tuesdayCheckBox || wednesdayCheckBox || thursdayCheckBox || fridayCheckBox || saturdayCheckBox) {
            // alert("get data");
            // setNewHabitForm(false);
            const days = [];
            if (sundayCheckBox) {
                days.push(0);
            }
            if (mondayCheckBox) {
                days.push(1);
            }
            if (tuesdayCheckBox) {
                days.push(2);
            }
            if (wednesdayCheckBox) {
                days.push(3);
            }
            if (thursdayCheckBox) {
                days.push(4);
            }
            if (fridayCheckBox) {
                days.push(5);
            }
            if (saturdayCheckBox) {
                days.push(6);
            }
            console.log(days);
            const newHabitSendableObject = {
                name: newHabit,
                days: days
            };
            console.log(newHabitSendableObject);
            setNewHabitFormDisable(true);
            const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', newHabitSendableObject, config);
            promise.then((response) => {
                alert("deu o post");
                console.log(habitsList);
                console.log(response);
                const newHabitsList = habitsList.concat(response.data);
                console.log(newHabitsList);
                setHabitsList(newHabitsList);
                console.log(response);
                setNewHabitFormDisable(false);
                setNewHabitForm(false);
                setNewHabit("");
            });
            promise.catch((response) => {
                alert("n deu o post");
                console.log(response.response.data.message);
            });
        }
        else {
            alert("Escolha pelo menos um dia da semana")
        }
    }

    function newHabitFormFunction() {
        if (newHabitForm && !newHabitFormDisable) {
            return (
                <>
                    <ContainerNewHabitForm onSubmit={getNewHabit}>
                        <StandardInput required
                            type="text"
                            value={newHabit} onChange={e => setNewHabit(e.target.value)}
                            placeholder="nome do hábito" />
                        <ContainerDaysChoise>
                            <CheckBoxContainer>
                                <DayCheckBox letter="D" id="Sunday"

                                    value={sundayCheckBox} onChange={e => setSundayCheckBox(e.target.checked)}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Sunday" >D</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBox letter="S" id="Monday"

                                    value={mondayCheckBox} onChange={e => setMondayCheckBox(e.target.checked)}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Monday" >S</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBox letter="T" id="Tuesday"

                                    value={tuesdayCheckBox} onChange={e => setTuesdayCheckBox(e.target.checked)}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Tuesday" >T</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBox letter="Q" id="Wednesday"

                                    value={wednesdayCheckBox} onChange={e => setWednesdayCheckBox(e.target.checked)}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Wednesday" >Q</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBox letter="Q" id="Thursday"

                                    value={thursdayCheckBox} onChange={e => setThursdayCheckBox(e.target.checked)}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Thursday" >Q</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBox letter="S" id="Friday"

                                    value={fridayCheckBox} onChange={e => setFridayCheckBox(e.target.checked)}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Friday" >S</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBox letter="S" id="Saturday"

                                    value={saturdayCheckBox} onChange={e => setSaturdayCheckBox(e.target.checked)}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Saturday" >S</CheckBoxLabel>
                            </CheckBoxContainer>
                        </ContainerDaysChoise>

                        <InputsContainerButtons>
                            <CancelNewHabitButton type="reset">Cancelar</CancelNewHabitButton>
                            <SaveNewHabitButton type="submit">Salvar</SaveNewHabitButton>
                        </InputsContainerButtons>
                    </ContainerNewHabitForm>
                </>
            );
        }
        else if (newHabitForm && newHabitFormDisable) {
            // console.log(sundayCheckBox);
            // console.log(mondayCheckBox);
            // console.log(tuesdayCheckBox);
            // console.log(wednesdayCheckBox);
            // console.log(thursdayCheckBox);
            // console.log(fridayCheckBox);
            // console.log(saturdayCheckBox);
            return (
                <>
                    <ContainerNewHabitForm>
                        <StandardInputDisabled required
                            disabled
                            type="text"
                            value={newHabit}
                            placeholder="nome do hábito" />
                        <ContainerDaysChoise>
                            <CheckBoxContainer>
                                <DayCheckBoxDisabled letter="D" id="Sunday"
                                    disabled
                                    checked={sundayCheckBox}
                                    value={sundayCheckBox}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Sunday" >D</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBoxDisabled letter="S" id="Monday"
                                    disabled
                                    checked={mondayCheckBox}
                                    value={mondayCheckBox}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Monday" >S</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBoxDisabled letter="T" id="Tuesday"
                                    disabled
                                    checked={tuesdayCheckBox}
                                    value={tuesdayCheckBox}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Tuesday" >T</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBoxDisabled letter="Q" id="Wednesday"
                                    disabled
                                    checked={wednesdayCheckBox}
                                    value={wednesdayCheckBox}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Wednesday" >Q</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBoxDisabled letter="Q" id="Thursday"
                                    disabled
                                    checked={thursdayCheckBox}
                                    value={thursdayCheckBox}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Thursday" >Q</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBoxDisabled letter="S" id="Friday"
                                    disabled
                                    checked={fridayCheckBox}
                                    value={fridayCheckBox}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Friday" >S</CheckBoxLabel>
                            </CheckBoxContainer>
                            <CheckBoxContainer>
                                <DayCheckBoxDisabled letter="S" id="Saturday"
                                    disabled
                                    checked={saturdayCheckBox}
                                    value={saturdayCheckBox}
                                    type="checkbox" />
                                <CheckBoxLabel htmlFor="Saturday" >S</CheckBoxLabel>
                            </CheckBoxContainer>
                        </ContainerDaysChoise>

                        <InputsContainerButtons>
                            <CancelNewHabitButtonDisabled disabled type="reset">Cancelar</CancelNewHabitButtonDisabled>
                            <SaveNewHabitButtonDisabled disabled type="submit">
                                <ThreeDots
                                    height="45"
                                    width="45"
                                    radius="9"
                                    color="#ffffff"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                            </SaveNewHabitButtonDisabled>
                        </InputsContainerButtons>
                    </ContainerNewHabitForm>

                </>
            );
        }
    }

    function deleteHabitFunction(habit) {
        if (window.confirm(`Deseja deletar o habito: ${habit.name}`)) {
            // alert("deletaaa");
            console.log(habit);
            const habitID = habit.id;
            console.log(habitID);
            const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitID}`, config);
            promise.then((response) => {
                // alert("deletou porra");
                console.log(response);
                console.log(habitsList);
                // const newArray = oldArray.filter(habit => habit.id !== 57633);
                const newHabitsList = habitsList.filter(h => h.id !== habitID);
                console.log(newHabitsList);
                setHabitsList(newHabitsList);
            });
            promise.catch((response) => {
                alert(response.response.data.message);
            });
        }
    }

    function renderHabitsFunction(habit) {
        return (
            <>
                <ContainerHabits>
                    <HabitTitle>{habit.name}</HabitTitle>
                    <ContainerDaysChoise>
                        <TrashDiv onClick={() => deleteHabitFunction(habit)}><BiTrash size={20} /></TrashDiv>

                        <CheckBoxContainer>
                            <DayCheckBox disabled checked={habit.days.includes(0)} letter="D" id="Sunday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Sunday" >D</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked={habit.days.includes(1)} letter="S" id="Monday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Monday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked={habit.days.includes(2)} letter="T" id="Tuesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Tuesday" >T</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked={habit.days.includes(3)} letter="Q" id="Wednesday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Wednesday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked={habit.days.includes(4)} letter="Q" id="Thursday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Thursday" >Q</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked={habit.days.includes(5)} letter="S" id="Friday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Friday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                        <CheckBoxContainer>
                            <DayCheckBox disabled checked={habit.days.includes(6)} letter="S" id="Saturday" type="checkbox" />
                            <CheckBoxLabel htmlFor="Saturday" >S</CheckBoxLabel>
                        </CheckBoxContainer>
                    </ContainerDaysChoise>
                </ContainerHabits>
            </>
        );
    }

    return (
        <>
            <HeaderHomeUser />



            <ContainerIphone8>
                <HabitsHeader>
                    <HabitsTitle>Meus hábitos</HabitsTitle>
                    <NewHabitButton onClick={openNewHabitFormFunction}>+</NewHabitButton>
                </HabitsHeader>

                {newHabitFormFunction()}

                <ContainerAllHabits>
                    {habitsList.map((habits) => renderHabitsFunction(habits))}
                </ContainerAllHabits>





                {existenceOfHabitsFunction()}
                {/* <NoHabitsText>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </NoHabitsText> */}
            </ContainerIphone8>

            <FooterHabits />

        </>
    );
}

const ContainerAllHabits = styled.div`
    margin-bottom: 80px;
`;

const TrashDiv = styled.div`
    cursor: pointer;
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
    padding-top: 13px;
`;

const ContainerHabits = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 10px;
    
`;

const SaveNewHabitButtonDisabled = styled.button`
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
    opacity: 0.7;
    display: flex;
    justify-content: center;
    align-items: center;
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

const CancelNewHabitButtonDisabled = styled.button`
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
    opacity: 0.7;
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
    cursor: pointer;
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

const DayCheckBoxDisabled = styled.input`
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
`;

const DayCheckBox = styled.input`
    cursor: pointer;
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
`;

const ContainerDaysChoise = styled.div`
    position: relative;
    display: flex;
    margin-left: 19px;
    margin-top: 8px;
`;

const StandardInputDisabled = styled.input`
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 8px;
    margin-left: 19px;
    margin-right: 18px;
    margin-top: 18px;
    color: #B3B3B3;
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
    margin-top: -52px;
    /* margin-bottom: 80px; */
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
    cursor: pointer;
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