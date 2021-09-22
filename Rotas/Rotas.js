import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaDespertador from '../src/Telas/ListaDespertador/ListaDespertador';
import AdicionarDespertador from '../src/Telas/AdicionarDespertador/AdicionarDespertador';
import Cronometro from '../src/Telas/Cronometro/Cronometro';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import DespertadorReducer from '../src/reducers/DespertadorReducer';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const Tab = createBottomTabNavigator();

export default function Rotas() {

  const allReducers = combineReducers({
    despertadores: DespertadorReducer
  })

  const store = createStore(
    allReducers
  )

  return (
    <Provider store={store}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            margin: 10,
            borderRadius: 10,
            backgroundColor: '#CACACA',
            height: 60,
          },
          // initialRouteName: 'Alarmes',
          tabBarShowLabel: false,
          headerShown: false,
          tabBarHideOnKeyboard: true,
        }}
      >
        <Tab.Screen
          name="Cronometro"
          component={Cronometro}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome5 name="stopwatch-20" size={24} color={focused ? '#000' : '#A0A0A0'} />
                <Text style={{ fontWeight: 'bold', color: focused ? 'black' : '#A0A0A0' }}>
                  Cronometro
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Alarmes"
          component={ListaDespertador}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Feather name="clock" size={24} color={focused ? '#000' : '#A0A0A0'} />
                <Text style={{ fontWeight: 'bold', color: focused ? '#000' : '#A0A0A0' }}>
                  Alarmes
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Criar Alarme"
          component={AdicionarDespertador}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <AntDesign name="pluscircleo" size={24} color={focused ? '#000' : '#A0A0A0'} />
                <Text style={{ fontWeight: 'bold', color: focused ? 'black' : '#A0A0A0' }}>
                  Criar Alarme
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </Provider>
  );
}