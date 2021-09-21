import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { CronometroView, TimerView, Timers, ButtonView, Button } from './styled';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Cronometro() {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [timerRef, setTimerRefOn] = useState('');

    useEffect(() => {
        let interval = null;
        if (timerOn) {
            interval = setInterval(() => {
                setTime(previousState => previousState + 10)
            }, 100);
        }
        else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [timerOn])

    return (
        <CronometroView>
            <TimerView>
                <Timers>
                    {("0" + Math.floor((time / 360000) % 60)).slice(-2)}:
                </Timers>
                <Timers>
                    {("0" + Math.floor((time / 6000) % 60)).slice(-2)}:
                </Timers>
                <Timers>
                    {("0" + Math.floor((time / 100) % 60)).slice(-2)}:
                </Timers>
                <Timers>
                    {("0" + ((time / 10) % 100)).slice(-1)}
                </Timers>

            </TimerView>
            <ButtonView>
                <Button onPress={() => setTimerOn(true)}>
                    <FontAwesome5 name="play-circle" size={72} color="#0B8B00" />
                </Button>
                <Button onPress={() => setTimerOn(false)}>
                    <Text>
                        <FontAwesome5 name="stop-circle" size={72} color="#FF9E00" />
                    </Text>
                </Button>
                <Button onPress={() => setTime(0)}>
                    <Text>
                        <FontAwesome5 name="times-circle" size={72} color="#CD0000" />
                    </Text>
                </Button>
            </ButtonView>
        </CronometroView>
    );
}