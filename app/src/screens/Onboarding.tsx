import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export function Onboarding({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos montar seu treino!</Text>
      <Button 
        title="Simular montagem e ir pro Hub" 
        onPress={() => navigation.navigate('Home')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});