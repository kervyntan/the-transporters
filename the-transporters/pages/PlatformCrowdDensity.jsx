import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Colours from "../assets/styles/Colours";
import { getPlatformCrowd, properties } from "../store/TransportStore";
import { Picker } from "@react-native-picker/picker";
import platformCrowdStyle from "../assets/styles/PlatformCrowdDensity";
// import Loading from "../components/Loading";

const PlatformCrowdDensity = () => {

  const [selectedValue, setSelectedValue] = useState(null);

  const [stations, setStations] = useState(properties.platformCrowdData.value);

  useEffect(() => {
    console.log(selectedValue)
    const fetchCrowdData = async () => {
      if (selectedValue != null) {
        await getPlatformCrowd(selectedValue)
        setStations(properties.platformCrowdData.value)
      }
    }

    fetchCrowdData();
  }, [selectedValue]);

  const crowdLevelColor = (crowdLevel) => {
    switch (crowdLevel) {
      case "l":
        return platformCrowdStyle.lowCrowdLevel;
      case "m":
        return platformCrowdStyle.mediumCrowdLevel;
      case "h":
        return platformCrowdStyle.highCrowdLevel;
      default:
        break;
    }
  }

  const displayStations = (res) => {
    if (res === '') {
      return;
    }

    if (stations != undefined) {
      return stations.map((item, index) => {
        return (
          <View key={index}>
            <Text style={crowdLevelColor(item.CrowdLevel)}> {item.Station} </Text>
          </View>
        );
      });
    }
  };

  return (
    <View style={{ backgroundColor: Colours.primaryLite, flex: 1 }}>

      <View style={platformCrowdStyle.spacing}>
        <Text> Crowd Level Legend: </Text>
        <View style={platformCrowdStyle.legendContainer}>
          <Text style={platformCrowdStyle.lowCrowdLevel}> Low </Text>
          <Text style={platformCrowdStyle.mediumCrowdLevel}> Medium </Text>
          <Text style={platformCrowdStyle.highCrowdLevel}> High </Text>
        </View>
      </View>

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

      {/* <Loading /> */}

      <View style={platformCrowdStyle.stationDisplay}>
        {selectedValue != '' ? displayStations(selectedValue) : ""}
      </View>
    </View>
  );
};

export default PlatformCrowdDensity;
