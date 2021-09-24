import styled from 'styled-components/native';

export const Card = styled.View`
    flex-direction: row;
    background-color: #4B4B4B;
    border-bottom-width: 1px;
    border-bottom-color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
`;

export const TimeNameView = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 45%;
`;

export const Time = styled.Text`
    font-size: 50px;
    color: white;
`;

export const Name = styled.Text`
    font-size: 15px;
    color: white;
`;

export const ViewWeek = styled.View`
    width: 30%;
    flex-direction: row;
    align-items: center;
`;

export const TextWeek = styled.Text`
    font-size: 18px;
    padding: 2px;
    color: white;
`;

export const ViewSwich = styled.View`
    width: 13%;
    align-items: center;
    justify-content: center;
`;

export const ViewDelete = styled.TouchableOpacity`
    width: 12%;
    align-items: center;
    justify-content: center;
`;