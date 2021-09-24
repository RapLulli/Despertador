import styled from "styled-components";

export const CronometroView = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    background-color: #4B4B4B;
`;

export const TimerView = styled.View`
    flex-direction: row;
    margin-top: 130px;
    padding: 10px;

    border-top-width: 2px;
    border-top-color: #CACACA;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    border-bottom-width: 2px;
    border-bottom-color: #CACACA;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export const Timers = styled.Text`
    font-size: 60px;
    color: white;
    text-align: center;
`;

export const ButtonView = styled.View`
    margin-top: 40px;
    flex-direction: row;
    align-items: center;
`;
  
export const Button = styled.TouchableOpacity`
    padding: 10px;
`;