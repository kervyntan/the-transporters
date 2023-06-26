import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, Animated } from 'react-native';
import homeStyles from '../assets/styles/Home';
import { Dimensions } from 'react-native';
import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import Colours from '../assets/styles/Colours';


const Home = () => {

  // const { height,  width } = Dimensions.get('window'); 

  const fadeAnim = useRef(new Animated.Value(0)).current; // initial value for opacity
  let firstName = "Kervyn"; //dummy value for now

  useEffect( () => {
    Animated.timing(fadeAnim, {
      toValue : 1,
      duration : 1500,
      useNativeDriver : true
    }).start();
  }, [fadeAnim])

  // Adding a login page with proper authentication
  return (
    <View style={{backgroundColor: Colours.primaryLite, flex: 1}}>
      <StatusBar animated backgroundColor='#6BB7D8' />
      <Animated.View style={{ opacity : fadeAnim }}>
        <Text style={homeStyles.welcome}>Welcome Back, {firstName} !</Text>
      </Animated.View>

    </View>
  );
}

export default Home;

