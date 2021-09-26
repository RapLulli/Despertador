import React, { useState } from 'react';
import { View } from 'react-native';
import {
    ViewCard, TextTitulo, ViewOperacao, TextOperacao,
    ViewResp, TextInput, ViewBot, BotaoSub, TextSub
} from './styles';

export default function QuizMatematica({ QuizCompleto }) {

    const [num1, setNum1] = useState(Math.floor(Math.random() * 5) + 3);
    const [num2, setNum2] = useState(Math.floor(Math.random() * 5) + 3);
    const [num3, setNum3] = useState(Math.floor(Math.random() * 50) + 3);
    const [resp, setResp] = useState((num1 * num2) + num3);

    const [resposta, setResposta] = useState();

    const conferirResposta = () => {
        if (resp == resposta) { 
            QuizCompleto();
        }
        else {
            var a = Math.floor(Math.random() * 10) + 3;
            var b = Math.floor(Math.random() * 10) + 3;
            var c = Math.floor(Math.random() * 50) + 3;
            setNum1(a);
            setNum2(b);
            setNum3(c);
            setResp((a * b) + c);
            setResposta();
        }
    }


    return (
        <View>
            <ViewCard>
                <TextTitulo>
                    Resolva a questão para desativar o alarme:
                </TextTitulo>
            </ViewCard>
            <ViewOperacao>
                <TextOperacao>
                    ({num1} x {num2}) + {num3}
                </TextOperacao>
            </ViewOperacao>
            <ViewResp>
                <TextInput
                    onChangeText={setResposta}
                    value={resposta}
                    placeholder="Resposta"
                    keyboardType="numeric"
                    maxLength={5}
                />
            </ViewResp>
            <ViewBot>
                <BotaoSub onPress={conferirResposta}>
                    <TextSub>
                        Responder
                    </TextSub>
                </BotaoSub>
            </ViewBot>
        </View>
    );
}