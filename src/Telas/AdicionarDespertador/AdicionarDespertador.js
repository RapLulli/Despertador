import React, { useState } from 'react';
import { Switch, View, StatusBar, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TabActions } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import {
  SafeAreaView, ViewTime, ButtonTime, TextTime, ViewDate,
  ButtonDate, TextDS, TextFDS, ViewName, TextInput, ViewQuiz,
  TextQuiz, BotaoSub, ViewSub, TextSub
} from './styles';

export default function AdicionarDespertador({ navigation }) {

  const despertadores = useSelector((state) => state.despertadores)
  const dispatch = useDispatch()

  const [id, setId] = useState(1);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showTimepicker = () => {
    showMode('time');
  };

  const [dom, setDom] = useState(false);
  const [seg, setSeg] = useState(false);
  const [ter, setTer] = useState(false);
  const [qua, setQua] = useState(false);
  const [qui, setQui] = useState(false);
  const [sex, setSex] = useState(false);
  const [sab, setSab] = useState(false);
  const styles = StyleSheet.create({
    ativo: {
      backgroundColor: "#0B8B00",
    },
    desativo: {
    }
  });

  const [nome, setNome] = useState('');

  const [quizMatematica, setQuizMatematica] = useState(true);
  const trocarQuizMatematica = () => {
    if (quizCores === false) { setQuizMatematica(true) }
    else { setQuizMatematica(previousState => !previousState) }
  };
  const [quizCores, setQuizCores] = useState(false);
  const trocarQuizCores = () => {
    if (quizMatematica === false) { setQuizCores(true) }
    else { setQuizCores(previousState => !previousState) }
  };

  const onsubmit = () => {
    const info = { id, date, dom, seg, ter, qua, qui, sex, sab, nome, quizMatematica, quizCores }
    dispatch({ type: "NOVO_ALARME", payload: info });
    navigation.dispatch(jumpToAction);
    Toast.show({
      type: 'success',
      position: 'bottom',
      text1: 'Alarme criado!',
      visibilityTime: 800,
    });
    clear();
  }

  const jumpToAction = TabActions.jumpTo('Alarmes');

  const clear = () => {
    setDate(new Date());
    setDom(false);
    setSeg(false);
    setTer(false);
    setQua(false);
    setQui(false);
    setSex(false);
    setSab(false);
    setNome('');
    setQuizMatematica(true);
    setQuizCores(false);
    setId(id + 1);
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View>

        <ViewTime>
          <ButtonTime onPress={showTimepicker}>
            <TextTime>
              {Intl.DateTimeFormat('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
              }).format(date)}
            </TextTime>
          </ButtonTime>
        </ViewTime>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />
        )}

      </View>
      <ViewDate>

        <ButtonDate onPress={() => setDom(dom ? false : true)}>
          <TextFDS style={dom ? styles.ativo : styles.desativo}>D</TextFDS>
        </ButtonDate>

        <ButtonDate onPress={() => setSeg(seg ? false : true)}>
          <TextDS style={seg ? styles.ativo : styles.desativo}>S</TextDS>
        </ButtonDate>

        <ButtonDate onPress={() => setTer(ter ? false : true)}>
          <TextDS style={ter ? styles.ativo : styles.desativo}>T</TextDS>
        </ButtonDate>

        <ButtonDate onPress={() => setQua(qua ? false : true)}>
          <TextDS style={qua ? styles.ativo : styles.desativo}>Q</TextDS>
        </ButtonDate>

        <ButtonDate onPress={() => setQui(qui ? false : true)}>
          <TextDS style={qui ? styles.ativo : styles.desativo}>Q</TextDS>
        </ButtonDate>

        <ButtonDate onPress={() => setSex(sex ? false : true)}>
          <TextDS style={sex ? styles.ativo : styles.desativo}>S</TextDS>
        </ButtonDate>

        <ButtonDate onPress={() => setSab(sab ? false : true)}>
          <TextFDS style={sab ? styles.ativo : styles.desativo}>S</TextFDS>
        </ButtonDate>

      </ViewDate>
      <ViewName>

        <TextInput
          onChangeText={setNome}
          value={nome}
          placeholder="Nome do alarme"
          keyboardType="default"
          maxLength={15}
        />

      </ViewName>
      <ViewQuiz>

        <TextQuiz>
          Quiz de matemática
        </TextQuiz>
        <Switch
          trackColor={{ false: "#000", true: "#0B8B00" }}
          thumbColor="#FFF"
          ios_backgroundColor="#797979"
          onValueChange={trocarQuizMatematica}
          value={quizMatematica}
        />

      </ViewQuiz>
      <ViewQuiz>

        <TextQuiz>
          Quiz de cores
        </TextQuiz>
        <Switch
          trackColor={{ false: "#000", true: "#0B8B00" }}
          thumbColor="#FFF"
          ios_backgroundColor="#797979"
          onValueChange={trocarQuizCores}
          value={quizCores}
        />

      </ViewQuiz>
      <ViewSub>

        <BotaoSub onPress={onsubmit}>
          <TextSub>
            Criar Alarme
          </TextSub>
        </BotaoSub>

      </ViewSub>
    </SafeAreaView>
  );
}