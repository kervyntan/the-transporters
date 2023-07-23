import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Colours from "../assets/styles/Colours";
import { platformCrowd, properties } from "../store/TransportStore";
import { Picker } from "@react-native-picker/picker";
import platformCrowdStyle from "../assets/styles/PlatformCrowdDensity";

const PlatformCrowdDensity = () => {

  const [selectedValue, setSelectedValue] = useState(null);

  const [stations, setStations] = useState(properties.platformCrowdData.value);

  useEffect(() => {
    if (selectedValue != null) {
      console.log(selectedValue)
      const promise = new Promise(platformCrowd(selectedValue))
      .then(() => {
        setStations(properties.platformCrowdData.value)
      })
    } 
  }, [selectedValue]);


  const displayStations = (res) => {
    if (res === '') {
      return;
    }

    if (stations != undefined) {
      return stations.map((item, index) => {
        return (
          <View key={index}>
            <Text> {item.Station} </Text>
          </View>
        );
      });
    }
  };

  return (
    <View style={{ backgroundColor: Colours.primaryLite, flex: 1 }}>
      <Text style={platformCrowdStyle.message}>
        Please select the service line:
      </Text>

      {/* Add a dropdown for selection of service lines */}
      {/* <RNPickerSelect
        onValueChange={(value) => {
          console.log(value);
          setSelectedValue(value);
        }}
        placeholder={[{ label: "Circle Line", value: "CCL" }]}
        items={[
          { key: "Circle Line", label: "Circle Line", value: "CCL" },
          { key: "North East Line", label: "North East Line", value: "NEL" },
          { key: "East West Line", label: "East West Line", value: "EWL" },
          {
            key: "Thomson East Coast Line",
            label: "Thomson East Coast Line",
            value: "TEL",
          },
          { key: "North South Line", label: "North South Line", value: "NSL" },
          { key: "Downtown Line", label: "Downtown Line", value: "DTL" },
        ]}
      /> */}

      <Picker
        selectedValue={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
        mode="dropdown" // Android only
      >
        <Picker.Item label="Please select the train line" value="Placeholder" />
        <Picker.Item label="Circle Line" value="CCL" />
        <Picker.Item label="North East Line" value="NEL" />
        <Picker.Item label="East West Line" value="EWL" />
        <Picker.Item label="Thomson East Coast Line" value="TEL" />
        <Picker.Item label="North South Line" value="NSL" />
        <Picker.Item label="Downtown Line" value="DTL" />
      </Picker>

      {selectedValue != '' ? displayStations(selectedValue) : ""}
    </View>
  );
};

export default PlatformCrowdDensity;
