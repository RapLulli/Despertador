import React, { useEffect, useState } from 'react';
import { Switch, StyleSheet } from 'react-native';
import { Card, TimeNameView, Time, Name, ViewWeek, TextWeek, ViewSwich, ViewDelete } from './styles';
import { Feather } from '@expo/vector-icons';

export default function CardDespertador({ dados, setModalDel, setIdDeletar, setDespertar, setQuizMat, setQuizCor, setLigado }) {

    const [nome, setNome] = useState(dados.item.nome);

    useEffect(() => {
        if (nome === '') {
            setNome('Alarme ' + dados.item.id);
        }
        setQuizMat(dados.item.quizMatematica);
        setQuizCor(dados.item.quizCores);
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
    const trocarStatusDespertador = () => { setStatusDespertador(previousState => !previousState) };

    useEffect(()=>{
        setLigado(StatusDespertador);
        return setLigado(StatusDespertador);
    },[StatusDespertador])

    const Delete = () => {
        setModalDel(true);
        setIdDeletar(dados.item.id);
    }

    useEffect(() => {
        setarAlarme();
    }, []);

    const setarAlarme = () => {
        setTimeout(() => {
            if (Intl.DateTimeFormat('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
            }).format(dados.item.date) === Intl.DateTimeFormat('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
            }).format(new Date())) {
                Semana();
                return
            }
            setarAlarme();
        }, 1000)
    }

    const Semana = () => {
        const day = new Date().getDay();
        if (dados.item.dom === false && dados.item.seg === false && 
            dados.item.ter === false && dados.item.qua === false &&
            dados.item.qui === false && dados.item.sex === false &&
            dados.item.sab === false) { setDespertar(true); setStatusDespertador(false); return }
        if (day === 0 && dados.item.dom === true) { setDespertar(true); return }
        if (day === 1 && dados.item.seg === true) { setDespertar(true); return }
        if (day === 2 && dados.item.ter === true) { setDespertar(true); return }
        if (day === 3 && dados.item.qua === true) { setDespertar(true); return }
        if (day === 4 && dados.item.qui === true) { setDespertar(true); return }
        if (day === 5 && dados.item.sex === true) { setDespertar(true); return }
        if (day === 6 && dados.item.sab === true) { setDespertar(true); return }
    };

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