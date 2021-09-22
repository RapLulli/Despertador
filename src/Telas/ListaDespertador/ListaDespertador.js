import React, { useState } from 'react';
import { StatusBar, FlatList, View } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import CardDespertador from '../../Componentes/CardDespertador/CardDespertador';
import CardSemDespertador from '../../Componentes/CardSemDespertador/CardSemDespertador';
import { SafeAreaView, ViewBottom, ViewModal, TextModal1, ViewModal2, TextModal2, ViewBot, TextBot, BootSim, BootNao } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import Modal from "react-native-modal";

export default function ListaDespertador() {

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
    setModalDel(false);
    setIdDeletar(null);
  }

  const naoDeletarAlarme = () => {
    setModalDel(false);
  }

  return (
    <SafeAreaView>
      <StatusBar />

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
            />
          )}
        />
      </View>
    </SafeAreaView >
  );
}