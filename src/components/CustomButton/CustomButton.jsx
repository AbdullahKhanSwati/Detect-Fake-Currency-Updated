import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ imageUrl, buttonText, route }) => {
    const navigation = useNavigation();
    const handlePress = () => {
        navigation.navigate(route);
    };

    return (
        <TouchableOpacity className='w-44 h-44 border rounded-lg' onPress={handlePress}>
            <ImageBackground
                source={{ uri: imageUrl }}
                className='w-full h-full justify-center bg-black opacity-50'
            >
                <Text className='text-2xl text-black font-semibold mx-auto' >{buttonText}</Text>
            </ImageBackground>
        </TouchableOpacity>
    );
};

export default CustomButton;
