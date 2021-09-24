import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { CronometroView, TimerView, Timers, ButtonView, Button } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Cronometro() {

    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

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





// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TouchableHighlight, } from 'react-native';
// import { Stopwatch } from 'react-native-stopwatch-timer';

// export default function Cronometro() {
//   const [isStopwatchStart, setIsStopwatchStart] = useState(false);
//   const [resetStopwatch, setResetStopwatch] = useState(false);

//   return (
//     <View style={styles.container}>
//       <View style={styles.container}>
//         <View style={styles.sectionStyle}>
//           <Stopwatch
//             laps
//             msecs
//             start={isStopwatchStart}
//             reset={resetStopwatch}
//             options={options}
//           />
//           <TouchableHighlight
//             onPress={() => {
//               setIsStopwatchStart(!isStopwatchStart);
//               setResetStopwatch(false);
//             }}>
//             <Text style={styles.buttonText}>
//               {!isStopwatchStart ? 'START' : 'STOP'}
//             </Text>
//           </TouchableHighlight>
//           <TouchableHighlight
//             onPress={() => {
//               setIsStopwatchStart(false);
//               setResetStopwatch(true);
//             }}>
//             <Text style={styles.buttonText}>RESET</Text>
//           </TouchableHighlight>
//         </View>

//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     textAlign: 'center',
//     fontSize: 20,
//     fontWeight: 'bold',
//     padding: 20,
//   },
//   sectionStyle: {
//     flex: 1,
//     marginTop: 32,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     fontSize: 20,
//     marginTop: 10,
//   },
// });

// const options = {
//   container: {
//     backgroundColor: '#FF0000',
//     padding: 5,
//     borderRadius: 5,
//     width: 200,
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 25,
//     color: '#FFF',
//     marginLeft: 7,
//   },
// };