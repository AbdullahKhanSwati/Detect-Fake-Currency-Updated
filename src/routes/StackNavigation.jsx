import React from 'react';
import {
    StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    WelcomeScreen, LoginScreen,
    RegistrationScreen, ForgotPasswordScreen,
    SettingScreen, SplashScreen, ResultScreen , 
} from '../screens';
import BottomTab from './BottomTab';
import RouteName from './RouteName';
import { ProcessedScreen } from '../screens/ProcessedScreen';
// import { ProcessedScreen } from '../screens/ProcessedScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={RouteName.SPLASH_SCREEN}
            >

                <Stack.Screen
                    name={RouteName.SPLASH_SCREEN}
                    component={SplashScreen}
                />
                <Stack.Screen
                    name={RouteName.WELCOME_SCREEN}
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name={RouteName.LOGIN_SCREEN}
                    component={LoginScreen}
                />
                <Stack.Screen
                    name={RouteName.REGISTER_SCREEN}
                    component={RegistrationScreen}
                />
                <Stack.Screen
                    name={RouteName.SETTING_SCREEN}
                    component={SettingScreen}
                />
                <Stack.Screen
                    name={RouteName.FORGOT_PASSWORD_SCREEN}
                    component={ForgotPasswordScreen}
                />
                <Stack.Screen
                    name={RouteName.BOTTOM_TAB}
                    component={BottomTab}
                />
                <Stack.Screen
                    name={RouteName.RESULT_SCREEN}
                    component={ResultScreen}
                />
                <Stack.Screen
                    name={RouteName.PROCESSED_SCREEN}
                    component={ProcessedScreen}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

});

export default StackNavigation;













// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import {
//     WelcomeScreen, LoginScreen,
//     RegistrationScreen, ForgotPasswordScreen,
//     SettingScreen, SplashScreen, ResultScreen,
// } from '../screens';
// import MainStackNavigator from './MainStackNavigator'; // Updated import
// import RouteName from './RouteName';

// const Stack = createNativeStackNavigator();

// const StackNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false
//         }}
//         initialRouteName={RouteName.SPLASH_SCREEN}
//       >
//         <Stack.Screen
//           name={RouteName.SPLASH_SCREEN}
//           component={SplashScreen}
//         />
//         <Stack.Screen
//           name={RouteName.WELCOME_SCREEN}
//           component={WelcomeScreen}
//         />
//         <Stack.Screen
//           name={RouteName.LOGIN_SCREEN}
//           component={LoginScreen}
//         />
//         <Stack.Screen
//           name={RouteName.REGISTER_SCREEN}
//           component={RegistrationScreen}
//         />
//         <Stack.Screen
//           name={RouteName.SETTING_SCREEN}
//           component={SettingScreen}
//         />
//         <Stack.Screen
//           name={RouteName.FORGOT_PASSWORD_SCREEN}
//           component={ForgotPasswordScreen}
//         />
//         <Stack.Screen
//           name={RouteName.RESULT_SCREEN}
//           component={ResultScreen}
//         />
//         <Stack.Screen
//           name={RouteName.BOTTOM_TAB}
//           component={MainStackNavigator} // Updated component
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default StackNavigation;

