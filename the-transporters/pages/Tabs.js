import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './Home';
import PlatformCrowdDensity from './PlatformCrowdDensity';
import PlatformCrowdForecast from './PlatformCrowdForecast';
import CarparkAvailability from './CarparkAvailability';
import pictureStyles from '../assets/styles/Pictures';
import React, { useRef, useEffect } from 'react';


import colors from '../assets/styles/Colours';
import { Image, View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
     
    let notification = 5 //dummy value

    
    return (
      <Tab.Navigator  
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
        
          tabBarShowLabel: false,
          

          tabBarStyle: {
            backgroundColor: colors.white,
            position: 'absolute',
            elevation: 0,
            borderRadius: 15,
            height: 70,
            right: 20,
            left: 20,
            bottom: 20
          },
          // headerShown: false
        }}>
        <Tab.Screen name="Home" component={Home} options={{ 
            tabBarBadge: notification,
            tabBarIcon: ({focused}) => (
            
                <View style={pictureStyles.icon}>
                    <Image
                        source={require('../assets/home.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? colors.primary : colors.secondary,
                        }}
                    />
                    <Text
                        style={{
                            color: focused ? colors.primary : colors.secondary

                        }}>HOME</Text>
              
                </View>

             ) 
         }} />
        <Tab.Screen name="Carpark Availability" component={CarparkAvailability} options={{ 
             tabBarIcon: ({focused}) => (
                <View style={pictureStyles.icon}>
                    <Image
                        source={require('../assets/carpark.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? colors.primary : colors.secondary,
                        }}
                    />
                    <Text
                        style={{
                            color: focused ? colors.primary : colors.secondary,
                        }}>CARPARK</Text>
              
                </View>

             ) 
            }}/>
        <Tab.Screen name="Train Crowd" component={PlatformCrowdDensity} options={{ 
             tabBarIcon: ({focused}) => (
                <View style={pictureStyles.icon}>
                    <Image
                        source={require('../assets/crowd.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? colors.primary : colors.secondary,
                        }}  
                    />
                    <Text
                        style={{
                            color: focused ? colors.primary : colors.secondary
                        }}>CROWD</Text>
              
                </View>

             ) 
            }}/>
        <Tab.Screen name="Account" component={PlatformCrowdForecast} options={{ 
             tabBarIcon: ({focused}) => (
                <View style={pictureStyles.icon}>
                    <Image
                        source={require('../assets/account.png')}
                        resizeMode='contain'
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: focused ? colors.primary : colors.secondary,
                        }}
                    />
                     <Text
                        style={{
                            color: focused ? colors.primary : colors.secondary
                        }}>ACCOUNT</Text>
              
                </View>
             ) 
            }}/>
        </Tab.Navigator>
  
  
    )
}

export default Tabs;