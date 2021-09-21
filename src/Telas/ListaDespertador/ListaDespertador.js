import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useScrollToTop } from '@react-navigation/native';
import CardDespertador from '../../Componentes/CardDespertador/CardDespertador';
import CardSemDespertador from '../../Componentes/CardSemDespertador/CardSemDespertador';
import { SafeAreaView, ViewBottom } from './styles';
import { useSelector, useDispatch } from 'react-redux';

export default function ListaDespertador() {
  
  const ref = React.useRef(null);
  useScrollToTop(ref);

  const despertadores = useSelector((state) => state.despertadores)
  
  return (
    <SafeAreaView>
      <StatusBar />
      <FlatList ref={ref}
        keyExtractor={(despertadores) => despertadores.id + ''}
        data={despertadores}
        ListEmptyComponent={<CardSemDespertador />}
        ListFooterComponent={<ViewBottom />}
        renderItem={(despertadores) => (
          <CardDespertador dados={despertadores}/>
        )}
      />
    </SafeAreaView>
  );
}