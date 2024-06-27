import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, StatusBar } from 'react-native';
import RouteName from '../../../routes/RouteName';
import colors from '../../../utils/colors';

const WelcomeScreen = ({ navigation }) => {

    const handleSignupWithEmailPhone = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }

    const handleSignInPress = () => {
        navigation.navigate(RouteName.LOGIN_SCREEN);
    }

    return (
        <ImageBackground source={require('../../../assets/bg.webp')} style={styles.background}>
            <View style={styles.layer} >
                <StatusBar backgroundColor='transparent' barStyle={'light-content'} translucent={true} />

                <View style={styles.upperContainer} >
                    <View style={styles.textContainer}>
                        <Text style={styles.welcomeText}>Welcome</Text>
                        <View style={styles.innerTextContainer}>
                            <Text style={styles.welcomeText}>to </Text>
                            <Text style={styles.specialWelcomeText}>AI - FCD</Text>
                        </View>
                        <Text style={styles.descriptionText}>Fake Currency Detection Using AI</Text>
                    </View>
                </View>

                <View style={styles.lowerContainer}>

                    <View style={styles.lineContainer}>
                        <View style={styles.line} />
                        <Text style={styles.signupText}>sign up with</Text>
                        <View style={styles.line} />
                    </View>

                    <View style={styles.buttonContainer}>

                        <TouchableOpacity style={styles.socialButtons}>
                            <Image source={require('../../../assets/gicon.png')} style={styles.icon} />
                            <Text style={styles.buttonText}>GOOGLE</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.otherSignUpButton} onPress={handleSignupWithEmailPhone} >
                        <Text style={styles.otherButtonText}>Register Using Email</Text>
                    </TouchableOpacity>

                    <View style={styles.signInContainer} >
                        <Text style={styles.signinText}>Already have an account?  </Text>
                        <TouchableOpacity onPress={handleSignInPress} >
                            <Text style={styles.signInButtonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    layer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        paddingHorizontal: '5%',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    upperContainer: {
        borderColor: 'yellow',
        height: '65%',
        justifyContent: 'center',
        width: '100%',
    },
    lowerContainer: {
        height: '35%',
        width: '100%',
    },
    skipContainer: {
        width: 55,
        height: 33,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        position: 'absolute',
        top: 0,
        right: 0
    },
    skipText: {
        color: colors.black,
        fontSize: 12,
        fontWeight: '500',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    innerTextContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    specialWelcomeText: {
        fontSize: 53,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.secondary,
    },
    welcomeText: {
        fontSize: 53,
        fontWeight: '700',
        color: colors.white,
    },
    descriptionText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: '400'
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '7%'
    },
    signupText: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
        paddingHorizontal: '8%'
    },
    line: {
        height: 1,  // Adjust this for line thickness
        flex: 1,
        backgroundColor: colors.white,
        opacity: 0.5
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '7%'
    },
    socialButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        height: 55,
        width: '100%'
    },
    buttonText: {
        color: colors.black,
        marginLeft: 13,
    },
    icon: {
        width: 28,
        height: 28,
    },
    otherSignUpButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.white,
        borderRadius: 30,
        height: 55,
        borderWidth: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        marginBottom: '7%'
    },
    otherButtonText: {
        fontSize: 17,
        fontWeight: '800',
        color: colors.white,
    },
    signInContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    signInButtonText: {
        fontSize: 14,
        color: colors.white,
        textDecorationLine: 'underline',
        textDecorationColor: colors.white
    },
    signinText: {
        fontSize: 14,
        fontWeight: '400',
        color: colors.white,
    },
});