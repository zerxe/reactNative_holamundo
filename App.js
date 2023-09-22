import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState('');
  const [contador, setContador] = useState(0);
  const textoHolaMundo = 'Hola Mundo';

  const crearHolaMundo = () => {
    if (contador < textoHolaMundo.length) {
      setMensaje(mensaje + textoHolaMundo.charAt(contador));
      setContador(contador + 1);
    } else {
      setContador(0);
      setMensaje('');
    }
  };

  return (
    
    <View style={styles.container}>
    <Text>UT2 React Native "Hola Mundo" Adolfo Morales</Text>  
      <Text>Para generar la palabra "Hola Mundo" pulsa "+"</Text>
      <StatusBar style="auto" />
      <Text>{mensaje}</Text>
      <Button title="+" onPress={crearHolaMundo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
