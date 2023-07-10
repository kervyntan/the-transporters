import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import Colours from '../assets/styles/Colours';
import { platformCrowd } from '../store/TransportStore';

const PlatformCrowdDensity = () => {
    const [result, setResult] = useState("")

    useEffect( () => {
        platformCrowd().then((res) => {
            setResult(res.data);
        })
    }, [])
    return (
    <View style={{backgroundColor: Colours.primaryLite, flex: 1}}> 
        <Text> Test </Text>
    </View>
    )
}

export default PlatformCrowdDensity;