import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import Colours from '../assets/styles/Colours';
import { platformCrowd } from '../store/TransportStore';
import platformCrowdStyle from '../assets/styles/PlatformCrowdDensity';

const PlatformCrowdDensity = () => {
    const [result, setResult] = useState("")

    useEffect( () => {
        platformCrowd().then((res) => {
            setResult(res.data);
        })
    }, [])
    return (
    <View style={{backgroundColor: Colours.primaryLite, flex: 1}}> 
        <Text style={platformCrowdStyle.message}> How crowded are the Trains? </Text>
    </View>
    )
}

export default PlatformCrowdDensity;