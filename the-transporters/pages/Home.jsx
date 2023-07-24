import { StatusBar } from "expo-status-bar";
import { Text, View, Animated, SafeAreaView, FlatList } from "react-native";
import homeStyles from "../assets/styles/Home";
import React, { useRef, useEffect, useState } from "react";
import Colours from "../assets/styles/Colours";
import {
  properties,
  getServiceAlerts,
  getCarparkAvailability,
  getCrowdForecast,
  getPlatformCrowd,
} from "../store/TransportStore";

const Item = ({ title }) => (
  <View>
    <Text>{title}</Text>
  </View>
);

const Home = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // initial value for opacity

  const [alertData, setAlertData] = useState([]);
  const [carparkData, setCarparkData] = useState([]);
  const [crowdForecastData, setCrowdForecastData] = useState([]);
  const [platformCrowdData, setPlatformCrowdData] = useState([]);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  useEffect(() => {
    const fetchData = async () => {
      await getServiceAlerts();
      await getCarparkAvailability();
      await getCrowdForecast();
      await getPlatformCrowd();

      setAlertData(properties.serviceAlertsData.value);
      setCarparkData(properties.carparkData.value.slice(0, 10));
      setCrowdForecastData(properties.forecastData.value);
      setPlatformCrowdData(properties.platformCrowdData.value);
      // console.log(properties);
    };
    fetchData();
  }, []);

  // Adding a login page with proper authentication
  return (
    <SafeAreaView style={{ backgroundColor: Colours.primaryLite, flex: 1 }}>
      <StatusBar animated backgroundColor="#6BB7D8" />
      <Animated.View style={{ opacity: fadeAnim }}>
        <Text style={homeStyles.welcome}> Welcome Back, User! </Text>
      </Animated.View>

      <View>
        <Text style={homeStyles.infoDisplayTitle}> Information: </Text>
        <View style={homeStyles.infoDisplay}>

          <View>
            <Text> Carpark Availability: </Text>
            <FlatList
              contentContainerStyle={[homeStyles.flex, homeStyles.flexCenter]}
              data={carparkData}
              renderItem={(obj) => {
                console.log(obj);
                return (
                  <View>
                    <Item title={obj.item.Development} />
                    <Item title={obj.item.AvailableLots} />
                  </View>
                );
              }}
              horizontal={false}
              numColumns={3}
            />
          </View>

          <View>
            <Text> Platform Crowds: </Text>
            <FlatList
              data={platformCrowdData}
              renderItem={(obj) => {
                console.log(obj);
                return (
                  <View style={[homeStyles.flex, homeStyles.flexCenter]}>
                    <Item title={obj.item.Station} />
                    <Item title={"Available Lots: " + obj.item.CrowdLevel} />
                  </View>
                );
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
