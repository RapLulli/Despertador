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

export const ViewOperacao = styled.View`
    border-top-width: 2px;
    border-top-color: #000;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    border-bottom-width: 2px;
    border-bottom-color: #000;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
`;

export const TextOperacao = styled.Text`
    padding: 20px;
    text-align: center;
    font-size: 50px;
    font-weight: bold;
`;

export const ViewResp = styled.View`
    align-items: center;
    justify-content: center;
`;

export const TextInput = styled.TextInput`
    margin-top: 20px;
    width: 80%;
    height: 50px;
    border: 1px #CACACA;
    padding: 0px;
    padding-left: 10px;
    font-size: 25px;
    border-radius: 8px;
    background-color: #898989;
    font-weight: bold;
`;

export const ViewBot = styled.View`
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

export const BotaoSub = styled.TouchableOpacity`
    background-color: white;
    width: 50%;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #898989;
`;

export const TextSub = styled.Text`
    padding: 5px;
    font-size: 25px;
    font-weight: bold;
`;