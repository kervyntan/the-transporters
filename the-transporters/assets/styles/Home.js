import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
    flex: {
      display: "flex",
      flexDirection: "row",
    },
    flexCenter: {
      justifyContent: "space-between"
    },
    welcome: {
      color: "#000",
      fontWeight : "light",
      fontSize: "2rem",
      textAlign: "left",
      top: 10,
      letterSpacing: 0.08,
      fontSize: 30,
      alignSelf: "center"
    },
    infoDisplay: {
      display: "flex",
      flexDirection: "row",
    },
    infoDisplayTitle: {
      fontSize: 18,
      marginTop : 20
    },  
    spacing: {
      marginTop: 20
    },
    input: {
      borderWidth: 1,
      height: 40,
      padding : 10,
      marginBottom : 20
    },
    button: {
      marginTop : 10,
    },
    navigation: {
      backgroundColor : "blue",
      height : 60,
      width: "100%",
      position : "absolute",
      bottom : 0,
      flex : 1,
      flexDirection: "row",
      justifyContent : "space-around"
    },
    buttonNav: {
      fontSize : 10,
    }
  });

export default homeStyles;