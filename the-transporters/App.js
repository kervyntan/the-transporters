import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useState } from 'react';

export default function App() {

  const [dummyText, setDummyText] = useState("");
  const [counter, setCounter] = useState(0);

  const onClickText = () => {
    setCounter(counter + 1);

    if (counter % 2 === 0) {
      setDummyText("Counter is even");
    } else {
      setDummyText("Counter is odd");
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor='#f9b2c4' />
      <Text style={styles.welcome} onPress={onClickText} numberOfLines={1} ellipsizeMode="middle"> {dummyText} </Text>
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
  welcome: {
    color: "red",
    fontSize: 50,
    textAlign: "center"
  }
});
