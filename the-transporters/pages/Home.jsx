import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button} from 'react-native';
// import { DirectionsCarIcon } from '@mui/icons-material/DirectionsCar';
import homeStyles from '../assets/styles/Home';
import CameraIcon from "@mui/icons-material/Camera";
import { Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';
import CarparkAvailability from './CarparkAvailability';

const Home = () => {

  // const { height,  width } = Dimensions.get('window');

  // console.log(height);
  // console.log(width);r
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
    <View style={homeStyles.container}>
      <StatusBar animated backgroundColor='#f9b2c4' />
      <Text style={homeStyles.welcome} onPress={onClickText} numberOfLines={1} ellipsizeMode="middle"> {dummyText} </Text>
      <TextInput style={homeStyles.input} placeholder="This is a test" onChangeText={text => setTextInput(text)} value={textInput} />
      <Button style={homeStyles.button} title="Increase" onPress={() => setCounter(counter + 1)}/>

      <View style={homeStyles.navigation}>


        {/* <CameraIcon /> */}
        {/* <Text style={homeStyles.welcome}>
          <Button style={homeStyles.buttonNav} title="Carpark Availability" onPress={() => console.log("Hello")} />
        </Text>

        <Text style={homeStyles.welcome}>
          hello
        </Text>

        <Text style={homeStyles.welcome}>
          hello
        </Text> */}
      </View>
    </View>
  );
}

export default Home;

