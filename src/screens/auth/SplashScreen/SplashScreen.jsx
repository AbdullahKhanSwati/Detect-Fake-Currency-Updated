import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, Image, Animated, Easing } from 'react-native';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
const SplashScreen = ({ navigation }) => {
    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        startTypingAnimation();
    }, []);

    const startTypingAnimation = () => {
        Animated.timing(animation, {
            toValue: 1,
            duration: 2000, // Adjust the duration as needed
            easing: Easing.linear,
            useNativeDriver: false,
        }).start(() => {
            // Navigation to another screen after animation completion
              navigation.replace(RouteName.BOTTOM_TAB);
        });
    };

    const translateY = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [-50, 0], // Adjust the starting translateY value as needed
    });

    return (
        <View className={'flex-1 justify-center items-center bg-white'}>
            <StatusBar backgroundColor={colors.white} />
            <Animated.View style={{ transform: [{ translateY }] }}>
                <Image
                    source={require('../../../assets/logo_transparent.png')}
                    className={'w-24 h-24'}
                />
            </Animated.View>
            <Animated.Text
                className={`mt-5 text-lg font-bold text-black absolute bottom-3`}
                style={{opacity: animation}}
                >
                AI - Fake Currency Detection
            </Animated.Text>
        </View>
    );
};

export default SplashScreen;