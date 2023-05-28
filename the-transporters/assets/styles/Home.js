import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
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