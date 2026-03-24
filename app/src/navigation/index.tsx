import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboarding } from '../screens/Onboarding';
import { Home } from '../screens/Home';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      {/* Tela de perguntas iniciais (sem o cabeçalho padrão para ficar mais bonito) */}
      <Stack.Screen 
        name="Onboarding" 
        component={Onboarding} 
        options={{ headerShown: false }} 
      />
      
      {/* O Hub Principal */}
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Seu Treino', headerBackVisible: false }} 
      />
    </Stack.Navigator>
  );
}