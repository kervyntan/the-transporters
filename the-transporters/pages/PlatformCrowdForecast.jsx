import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import { crowdForecast } from '../store/TransportStore';

const PlatformCrowdForecast = () => {
    const [result, setResult] = useState("")

    useEffect(() => {
        crowdForecast().then((res) => {
            setResult(res.data);
        })
    }, [])
}

export default PlatformCrowdForecast;