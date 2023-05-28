import React from 'react';
import Home from './pages/Home';
import CarparkAvailability from './pages/CarparkAvailability';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function App() {
  
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      {/* <Home /> */}
      <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Carpark Availability') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          // headerShown: false
        })}>
          <Tab.Screen options={{ tabBarBadge : 3 }} name="Home" component={Home} />
          <Tab.Screen name="Carpark Availability" component={CarparkAvailability} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

