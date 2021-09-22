import React, { useEffect, useState } from 'react';
import { Text, View, Switch, StyleSheet } from 'react-native';
import { Card, TimeNameView, Time, Name, ViewWeek, TextWeek, ViewSwich, ViewDelete } from './styled';
import { Feather } from '@expo/vector-icons';

export default function CardDespertador({ dados, setModalDel, setIdDeletar }) {

    const [nome, setNome] = useState(dados.item.nome);

    useEffect(() => {
        if (nome === '') {
            setNome('Alarme ' + dados.item.id);
        }
    });

    const styles = StyleSheet.create({
        ativo: {
            color: "#0B8B00",
            borderBottomWidth: 1,
            borderBottomColor: '#0B8B00',
        },
        desativo: {
        }
    });

    const [StatusDespertador, setStatusDespertador] = useState(true);
    const trocarStatusDespertador = () => setStatusDespertador(previousState => !previousState);

    const Delete = () => {
        setModalDel(true);
        setIdDeletar(dados.item.id);
    }

    return (
        <Card>
            <TimeNameView>
                <Time>
                    {Intl.DateTimeFormat('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit'
                    }).format(dados.item.date)}
                </Time>

                <Name>
                    {nome}
                </Name>
            </TimeNameView>
            <ViewWeek>
                <TextWeek style={dados.item.dom ? styles.ativo : styles.desativo}>
                    D
                </TextWeek >
                <TextWeek style={dados.item.seg ? styles.ativo : styles.desativo}>
                    S
                </TextWeek>
                <TextWeek style={dados.item.ter ? styles.ativo : styles.desativo}>
                    T
                </TextWeek>
                <TextWeek style={dados.item.qua ? styles.ativo : styles.desativo}>
                    Q
                </TextWeek>
                <TextWeek style={dados.item.qui ? styles.ativo : styles.desativo}>
                    Q
                </TextWeek>
                <TextWeek style={dados.item.sex ? styles.ativo : styles.desativo}>
                    S
                </TextWeek>
                <TextWeek style={dados.item.sab ? styles.ativo : styles.desativo}>
                    S
                </TextWeek>
            </ViewWeek>
            <ViewSwich>
                <Switch
                    trackColor={{ false: "#000", true: "#0B8B00" }}
                    thumbColor="#FFF"
                    ios_backgroundColor="#797979"
                    onValueChange={trocarStatusDespertador}
                    value={StatusDespertador}
                />
            </ViewSwich>
            <ViewDelete onPress={Delete}>
                <Feather name="trash" size={28} color="#CD0000" />
            </ViewDelete>

        </Card>
    );
}