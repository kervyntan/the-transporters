import React, { useEffect, useState, useRef } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import Colours from "../assets/styles/Colours";
import { platformCrowd, properties } from "../store/TransportStore";
import RNPickerSelect from "react-native-picker-select";
import platformCrowdStyle from "../assets/styles/PlatformCrowdDensity";

const PlatformCrowdDensity = () => {
  const selectedLine = useRef();

  const [selectedValue, setSelectedValue] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (selectedValue != null && selectedValue != undefined) {
      platformCrowd(selectedValue)
      .then(res => { 
        if (res.status === 200) {
            displayStations(res.data)
        }
      });
    } else {
      platformCrowd("CCL")
      .then(res => { 
        if (res.status === 200) {
            displayStations(res.data)
        }
      });
    }

    if (!isLoaded) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }
  }, [selectedValue]);

//   useEffect(() => {
//     displayStations(properties.platformCrowdData.value);
//   }, [properties.platformCrowdData.value]);

  const displayStations = (res) => {
    if (res != null && res != undefined) {
      return res.map((item) => {
        return (
          <View key={res.indexOf(item)}>
            <Text> {item.Station} </Text>
          </View>
        );
      });
    }
  };

  return (
    <View style={{ backgroundColor: Colours.primaryLite, flex: 1 }}>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={platformCrowdStyle.message}>
          Please select the service line:
          <ActivityIndicator size="large" />
        </Text>
      </View>

      {/* Add a dropdown for selection of service lines */}
      <RNPickerSelect
        onValueChange={(value) => {
          setSelectedValue(value);
        }}
        items={[
          { key: "Circle Line", label: "Circle Line", value: "CCL" },
          { key: "North East Line", label: "North East Line", value: "NEL" },
          { key: "East West Line", label: "East West Line", value: "EWL" },
          { key: "North South Line", label: "North South Line", value: "NSL" },
          { key: "Downtown Line", label: "Downtown Line", value: "DTL" },
        ]}
      />

      {isLoaded ? displayStations(properties.platformCrowdData.value) : ""}
    </View>
  );
};

export default PlatformCrowdDensity;
