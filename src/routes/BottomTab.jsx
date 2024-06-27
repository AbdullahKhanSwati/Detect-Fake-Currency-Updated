import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RouteName from './RouteName';
import colors from '../utils/colors';
import {
  HomeScreen, DetectionScreen, ConverterScreen
} from '../screens/index';
const { height, width } = colors;

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        style: {
          height: 90, // Adjust the height as desired
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        iconStyle: {
          marginBottom: 10, // Adjust the margin as desired
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let title;
          let iconColor = focused ? colors.primary : colors.transparentBlack;

          if (route.name === RouteName.HOME_SCREEN) {
            iconName = 'home';
            title = 'Home';
          } else if (route.name === RouteName.DETECTION_SCREEN) {
            return (
              <View
                style={{
                  width: 90,
                  height: 90,
                  backgroundColor: colors.background,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 50,
                  borderTopLeftRadius: 50,
                  borderTopRightRadius: 50,
                }}
              >
                <View
                  style={{
                    borderRadius: 50,
                    width: 70,
                    height: 70,
                    backgroundColor: colors.primary,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <MaterialCommunityIcons name="credit-card-scan" size={40} color={colors.white} />
                </View>
              </View>
            );
          } else if (route.name === RouteName.CONVERTER_SCREEN) {
            iconName = 'calculator';
            title = 'Converter';
          }

          return (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Ionicons name={iconName} size={size + 2} color={iconColor} />
              {title && <Text style={{ fontSize: 12, color: iconColor }}>{title}</Text>}
            </View>
          );
        },
      })}
    >
      <Tab.Screen name={RouteName.HOME_SCREEN} component={HomeScreen} />
      <Tab.Screen
        name={RouteName.DETECTION_SCREEN}
        component={DetectionScreen}
        options={{ tabBarStyle: { display: 'none' } }}
      />
      <Tab.Screen name={RouteName.CONVERTER_SCREEN} component={ConverterScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;
