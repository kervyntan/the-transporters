import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { crowdForecast, properties } from '../store/TransportStore';

const PlatformCrowdForecast = () => {
    const [result, setResult] = useState("")

    useEffect(() => {
        crowdForecast();
        
        setResult(properties.forecastData);
    }, [])
}

export default PlatformCrowdForecast;