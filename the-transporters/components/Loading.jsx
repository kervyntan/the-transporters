import React from "react";
import { Text } from "react-native";
import style from "../assets/animation.module.css"

const Loading = () => {
  return (
    <>
      <Text>
        Loading <Text style={style.dot1}>.</Text>
        <Text style={style.dot2}>.</Text>
        <Text style={style.dot3}>.</Text>
      </Text>
    </>
  );
};

export default Loading;
