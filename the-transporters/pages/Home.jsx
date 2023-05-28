import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
// import { DirectionsCarIcon } from '@mui/icons-material/DirectionsCar';
import styles from '../assets/styles/Home';
import CameraIcon from "@mui/icons-material/Camera";
import React, { useEffect } from 'react';
import { useState } from 'react';

const Home = () => {

  const [dummyText, setDummyText] = useState("");
  const [counter, setCounter] = useState(0);

  const [textInput, setTextInput] = useState("");

  const onClickText = () => {
    setCounter(counter + 1);

    if (counter % 2 === 0) {
      setDummyText("Counter is even");
    } else {
      setDummyText("Counter is odd");
    }
  }

  useEffect( () => {
    if (counter % 2 === 0) {
      setDummyText("Counter is even");
    } else {
      setDummyText("Counter is odd");
    }
  }, [counter])

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor='#f9b2c4' />
      <Text style={styles.welcome} onPress={onClickText} numberOfLines={1} ellipsizeMode="middle"> {dummyText} </Text>
      <TextInput style={styles.input} placeholder="This is a test" onChangeText={text => setTextInput(text)} value={textInput} />
      <Button style={styles.button} title="Increase" onPress={() => setCounter(counter + 1)}/>

      <View style={styles.navigation}>
        {/* <CameraIcon /> */}
        <Text style={styles.welcome}>
          hello
        </Text>

        <Text style={styles.welcome}>
          hello
        </Text>

        <Text style={styles.welcome}>
          hello
        </Text>
      </View>
    </View>
  );
}

export default Home;

