import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, FlatList} from 'react-native'
import carparkStyle from '../assets/styles/CarparkAvailability'
import Colours from '../assets/styles/Colours';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from './Card'

const CarparkAvailability = () => {
    const filterBy = ["By Price", "By Distance", "By Avaliability"];
    const [activeFilter, setActiveFilter] = useState("By Price")
    const isLoading = false;
    const error = false;
    return (
    <View style={{backgroundColor: Colours.primaryLite, flex: 1, padding: 15} }> 
        <View> 
            <Text style={carparkStyle.message}> Find your carpark! </Text>
        </View>
        <View style={carparkStyle.searchContainer}>
            <View style={carparkStyle.searchWrapper}>
                <TextInput
                    style={carparkStyle.searchInput}
                    onChange={() => {}}
                    placeholder='Please input your destination'

                />

            </View>
            <TouchableOpacity 
                style={carparkStyle.searchBtn}
                onPress={() => {}}>
                <Image 
                    source={require('../assets/search.png')}
                    resizeMode='contain'
                    style={carparkStyle.searchBtnImage}

                        />
            </TouchableOpacity>
        </View>

        <View style={carparkStyle.tabsContainer}>
            <FlatList
                data={filterBy}
                renderItem={({item}) => (
                    <TouchableOpacity
                        style={carparkStyle.tab(activeFilter, item)}
                        onPress={() => 
                            setActiveFilter(item)}
                        >
                    <Text style={carparkStyle.tabText(activeFilter, item)}> {item} </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item}
                horizontal
                contentContainerStyle={{ columnGap: 20}}
                
            />
            <View style={carparkStyle.container}>
                <View style={{}}>
                    <Text style={{fontSize:30}}>Carparks</Text>  
                </View>
                    
          
            <View style={carparkStyle.container}>
                {isLoading ? (
                    <ActivityIndicator size='large' colors={Colours.primary} />
                ) : error ? (
                    <Text> Something went wrong :c </Text>
                ) : (
                    <FlatList 
                        data={[1,2,3,4,5]}
                        renderItem={({item}) => (
                                <Card
                                    item={item}
                                    />
                            )}
                            contentContainerStyle={{columnGap: 10}}
                        />
                    )
                    
                    }
                </View>
            </View>
        </View>
       

    </View>
    )
}

export default CarparkAvailability;