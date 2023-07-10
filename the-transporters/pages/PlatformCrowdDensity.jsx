import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Colours from "../assets/styles/Colours";
import { platformCrowd, properties } from "../store/TransportStore";
import RNPickerSelect from "react-native-picker-select";
import platformCrowdStyle from "../assets/styles/PlatformCrowdDensity";

const PlatformCrowdDensity = () => {
  const [result, setResult] = useState("");

  const [stations, setStations] = useState([]);

  const [selectedValue, setSelectedValue] = useState(null);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (selectedValue != null) {
      platformCrowd(selectedValue);
    } else {
      platformCrowd();
    }

    setResult(properties.platformCrowdData);

    setStations(properties.platformCrowdData.value);

    console.log(properties.platformCrowdData);

    if (!isLoaded) {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }
  }, [selectedValue]);

//   useEffect( () => {
//     setResult()
//   })

  const displayStations = (res) => {
    if (res != null && res != undefined) {

      return stations.map((item, index) => {
        return (
          <View key={stations.indexOf(item)}>
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
      <RNPickerSelect
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
      />

      {isLoaded ? displayStations(result) : ""}
    </View>
  );
};

export default PlatformCrowdDensity;
