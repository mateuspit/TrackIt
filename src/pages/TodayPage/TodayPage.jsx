import styled from "styled-components";
import HeaderHomeUser from "../../components/HeaderHomeUser";
import FooterHabits from "../../components/FooterHabits";

export default function TodayPage() {
    // useEffect(() => {
    //     const todayDate = new Date();
    //     console.log(todayDate.getDay())
    // });

    function plotTodayData() {
        const todayDate = new Date();
        let weekDay = "";
        console.log(todayDate.getDay())
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

    return (
        <>
            <HeaderHomeUser />
            <ContainerIphone8>
                {plotTodayData()}
                {/* <DayStats>Segunda, 17/05</DayStats> */}
                <HabitsFinishedPercent>67% dos hábitos concluídos</HabitsFinishedPercent>
                <ContainerHabitsStats>
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
                </ContainerHabitsStats>

                <ContainerHabitsStats>
                    <HabitTitle>Ler 1 capitulo de livro</HabitTitle>
                    <ContainerTodayStats>
                        <SequenceAndRecordTitle>Sequência atual:&nbsp;</SequenceAndRecordTitle>
                        <MakeTodayOrBrokeRecord>{" "}3 dias</MakeTodayOrBrokeRecord>
                    </ContainerTodayStats>
                    <ContainerTodayStats>
                        <SequenceAndRecordTitle>Seu recorde:&nbsp;</SequenceAndRecordTitle>
                        <MakeTodayOrBrokeRecord>5 dias</MakeTodayOrBrokeRecord>
                    </ContainerTodayStats>
                    <BigDailyCheck type="checkbox" />
                </ContainerHabitsStats>

                <ContainerHabitsStats>
                    <HabitTitle>Ler 1 capitulo de livro</HabitTitle>
                    <ContainerTodayStats>
                        <SequenceAndRecordTitle>Sequência atual:&nbsp;</SequenceAndRecordTitle>
                        <NotMakeTodayOrNotBrokeRecord>{" "}3 dias</NotMakeTodayOrNotBrokeRecord>
                    </ContainerTodayStats>
                    <ContainerTodayStats>
                        <SequenceAndRecordTitle>Seu recorde:&nbsp;</SequenceAndRecordTitle>
                        <NotMakeTodayOrNotBrokeRecord>5 dias</NotMakeTodayOrNotBrokeRecord>
                    </ContainerTodayStats>
                    <BigDailyCheck type="checkbox" />
                </ContainerHabitsStats>

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
    margin-top: 13px;
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