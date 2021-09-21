import styled from 'styled-components/native';

export const SafeAreaView = styled.SafeAreaView`
    flex: 1;
    background-color: #4B4B4B;
`;

export const ViewTime = styled.View`

    margin-top: 20px;

    border-top-width: 2px;
    border-top-color: #CACACA;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    border-bottom-width: 2px;
    border-bottom-color: #CACACA;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;

`;

export const ButtonTime = styled.TouchableOpacity`
    height: 120px;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const TextTime = styled.Text`
    color: white;
    font-size: 80px;
`;

export const ViewDate = styled.View`
    flex-direction: row;
    padding: 20px;
    padding-left: 30px;
    padding-right: 30px;
`;

export const ButtonDate = styled.TouchableOpacity`
    flex: 1;
    padding-left: 5px;
`;

export const TextDS = styled.Text`
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    background-color: #898989;
    border-radius: 60px;
    border: #CACACA;
    color: white;
`;

export const TextFDS = styled.Text`
    text-align: center; 
    font-size: 20px;
    font-weight: bold;
    background-color: #898989;
    border-radius: 60px;
    border: #CACACA;
    color: #CD0000;
`;

export const ViewName = styled.View`
    padding: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

export const TextInput = styled.TextInput`
    width: 100%;
    height: 50px;
    border: 1px #CACACA;
    padding-left: 10px;
    font-size: 20px;
    border-radius: 5px;
    background-color: #898989;
`;

export const ViewQuiz = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;

    border-bottom-width: 2px;
    border-bottom-color: #CACACA;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`;


export const TextQuiz = styled.Text`
    font-size: 20px;
    color: white;
`;

export const ViewSub = styled.View`
    padding-top: 30px;
    justify-content: center;
    align-items: center;
`;

export const BotaoSub = styled.TouchableOpacity`
    width: 70%;
    height: 45px;
    background-color: white;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    background-color: #CACACA;
`;

export const TextSub = styled.Text`
    padding: 9px;
    font-size: 20px;
`;