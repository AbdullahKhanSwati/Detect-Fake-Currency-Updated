import React from 'react';
import { View, Text } from 'react-native';
import { UseStateContext } from '../../context/ContextProvider';

const SettingScreen = () => {
    const {
        userInfo, setUserInfo,
    } = UseStateContext();

    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}

export default SettingScreen;