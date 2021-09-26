import React, { useState } from 'react';
import { View } from 'react-native';
import {
    ViewCard, TextTitulo, ViewDesafio, TextDesafio, TextCor,
    ViewBotoes, ViewBotRow, BotCor, TextBot
} from './styles';

export default function QuizCores({ QuizCompleto }) {
    const cores = ['Verde', 'Amarelo', 'Vermelho', 'Roxo', 'Azul', 'Rosa', 'Preto', 'Laranja', 'Marrom'];

    const [cor, setCor] = useState(Math.floor(Math.random() * 9));

    const Carregar = () => {
        setCor(Math.floor(Math.random() * 9));
    }

    const randomColor = require('randomcolor');
    const color = randomColor({ luminosity: 'light' });
    const back = randomColor({ luminosity: 'dark' });

    return (
        <View>
            <ViewCard>
                <TextTitulo>
                    Resolva o desafio para desativar o alarme:
                </TextTitulo>
            </ViewCard>
            <ViewDesafio>
                <TextDesafio>
                    Clique na cor de nome:
                </TextDesafio>
                <TextCor style={{
                    color: color,
                    backgroundColor: back,
                }}>
                    {cores[cor]}
                </TextCor>
            </ViewDesafio>
            <ViewBotoes>
                <ViewBotRow>
                    <BotCor
                        onPress={() => {
                            if (cor == 0) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'green' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                    <BotCor
                        onPress={() => {
                            if (cor == 1) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'yellow' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                    <BotCor
                        onPress={() => {
                            if (cor == 2) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'red' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                </ViewBotRow>
                <ViewBotRow>
                    <BotCor
                        onPress={() => {
                            if (cor == 3) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'purple' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                    <BotCor
                        onPress={() => {
                            if (cor == 4) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'blue' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                    <BotCor
                        onPress={() => {
                            if (cor == 5) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'hotpink' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                </ViewBotRow>
                <ViewBotRow>
                    <BotCor
                        onPress={() => {
                            if (cor == 6) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'black' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                    <BotCor
                        onPress={() => {
                            if (cor == 7) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'orange' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                    <BotCor
                        onPress={() => {
                            if (cor == 8) {
                                QuizCompleto();
                            } else { Carregar() }
                        }}
                        style={{ backgroundColor: 'saddlebrown' }}>
                        <TextBot> </TextBot>
                    </BotCor>
                </ViewBotRow>
            </ViewBotoes>

        </View>
    );
}