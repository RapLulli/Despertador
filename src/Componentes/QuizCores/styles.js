import styled from 'styled-components/native';

export const ViewCard = styled.View`
    padding: 15px;
    align-items: center;
`;

export const TextTitulo = styled.Text`
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const ViewDesafio = styled.View`
    border-top-width: 2px;
    border-top-color: #000;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    border-bottom-width: 2px;
    border-bottom-color: #000;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const TextDesafio = styled.Text`
    padding: 10px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 31px;
    font-weight: bold;
    color: #000;
`;

export const TextCor = styled.Text`
    text-align: center;
    padding: 5px;
    padding-bottom: 5px;
    font-size: 40px;
    font-weight: bold;
    margin-left: 90px;
    margin-right: 90px;
    margin-bottom: 20px;
    border-radius: 10px;
`;

export const ViewBotoes = styled.View`
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
`;

export const ViewBotRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0px;
`;

export const BotCor = styled.TouchableOpacity`
    height: 70px;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
`;

export const TextBot = styled.Text`
    font-size: 150px;
`;