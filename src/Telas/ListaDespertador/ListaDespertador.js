import React, { useEffect, useState } from 'react';
import { StatusBar, FlatList, View, Vibration } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import CardDespertador from '../../Componentes/CardDespertador/CardDespertador';
import CardSemDespertador from '../../Componentes/CardSemDespertador/CardSemDespertador';
import {
  SafeAreaView, ViewBottom, ViewModal, TextModal1, ViewModal2, TextModal2,
  ViewBot, TextBot, BootSim, BootNao, ViewDespertador
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import Modal from "react-native-modal";
import QuizMatematica from '../../Componentes/QuizMatematica/QuizMatematica';
import QuizCores from '../../Componentes/QuizCores/QuizCores';
import { Audio } from 'expo-av';

export default function ListaDespertador() {

  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../../assets/Alarm.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const ref = React.useRef(null);
  useScrollToTop(ref);

  const despertadores = useSelector((state) => state.despertadores)

  const dispatch = useDispatch();

  const deletarItem = (id) => {
    dispatch({ type: "DELETAR_ALARME", id })
  }

  const [modalDel, setModalDel] = useState(false);
  const [idDeletar, setIdDeletar] = useState(null);

  const deletarAlarme = () => {
    deletarItem(idDeletar);
    setLigado(false);
    setModalDel(false);
    setIdDeletar(null);
  }

  const naoDeletarAlarme = () => {
    setModalDel(false);
  }

  const [quizMat, setQuizMat] = useState(false);
  const [quizCor, setQuizCor] = useState(false);
  const [despertar, setDespertar] = useState(false);
  const [ligado, setLigado] = useState(false);
  const [disparada, setDisparada] = useState(false);

  useEffect(() => {
    if (despertar === true && ligado === true) {
      setDisparada(true);
      playSound();
      Vibration.vibrate(500, true);
    } else {
      setSound();
      Vibration.cancel();
    }

  }, [despertar, ligado])

  const QuizCompleto = () => { setDespertar(false); setDisparada(false) };

  const SortearQuiz = () => {

    if (quizMat === true && quizCor === true) {
      var quiz = Math.floor(Math.random() * 2) + 1;
      if (quiz === 1) {
        return (<QuizMatematica QuizCompleto={QuizCompleto} />);
      } else { return (<QuizCores QuizCompleto={QuizCompleto} />); }
    }

    if (quizMat === true && quizCor === false) {
      return (
        <QuizMatematica QuizCompleto={QuizCompleto} />
      );
    }

    if (quizMat === false && quizCor === true) {
      return (
        <QuizCores QuizCompleto={QuizCompleto} />
      );
    }
  }

  return (
    <SafeAreaView>
      <StatusBar />

      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Modal isVisible={disparada}>
            <View style={{ flex: 1 }}>
              <ViewDespertador>
                {SortearQuiz()}
              </ViewDespertador>
            </View>
          </Modal>
        </View>
      </View>

      <View>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Modal isVisible={modalDel}>
            <View style={{ flex: 1 }}>
              <ViewModal>
                <TextModal1>DELETAR ALARME</TextModal1>
              </ViewModal>
              <ViewModal2>
                <TextModal2>Tem certeza que quer deletar o alarme?</TextModal2>
              </ViewModal2>
              <ViewBot>
                <BootSim onPress={deletarAlarme}>
                  <TextBot>SIM</TextBot>
                </BootSim>
                <BootNao onPress={naoDeletarAlarme}>
                  <TextBot>NÃO</TextBot>
                </BootNao>
              </ViewBot>
            </View>
          </Modal>
        </View>
      </View>

      <View>
        <FlatList ref={ref}
          keyExtractor={(despertadores) => despertadores.id + ''}
          data={despertadores}
          ListEmptyComponent={<CardSemDespertador />}
          ListFooterComponent={<ViewBottom />}
          renderItem={(despertadores) => (
            <CardDespertador
              dados={despertadores}
              setModalDel={setModalDel}
              setIdDeletar={setIdDeletar}
              setDespertar={setDespertar}
              setQuizMat={setQuizMat}
              setQuizCor={setQuizCor}
              setLigado={setLigado}
            />
          )}
        />
      </View>
    </SafeAreaView >
  );
}