import React from 'react';
import Rotas from './Rotas/Rotas';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import Toast, { BaseToast } from 'react-native-toast-message';

const toastConfig = { 
  success: ({ text1, props, ...rest }) => (
    <BaseToast
      style={{borderLeftColor: '#0B8B00', backgroundColor: '#CACACA', marginBottom: 40 }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      contentContainer={
        <Feather name="clock" size={24}/>
      }
      text1Style={{
        fontSize: 16,
        fontWeight: '400'
      }}
      text1={text1}
    />
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
      <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
    </NavigationContainer>
      
  );
}