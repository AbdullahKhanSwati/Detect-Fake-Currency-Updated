// Header
import React from 'react';
import { View, Text } from 'react-native';
import { UseStateContext } from '../../context/ContextProvider';
import colors from '../../utils/colors';

const Header = ({ title }) => {
    const {
        userInfo, setUserInfo,
    } = UseStateContext();

    return (
        <View className="bg-yellow h-9 mb-5 px-4" style={{backgroundColor: colors.primary}} >
            <Text className="text-lg font-semibold text-white" >{title}</Text>
        </View>
    )
}

export default Header;