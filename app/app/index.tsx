import { View, Text, Button, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Onboarding() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vamos montar seu treino!</Text>
      
      {/* Usamos router.replace para que ela não consiga "voltar" pra tela de login apertando o botão de voltar do Android */}
      <Button 
        title="Simular montagem e ir pro Hub" 
        onPress={() => router.replace('/(tabs)')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});