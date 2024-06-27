import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
import { CustomInput } from '../../../components/index';
import { UseStateContext } from '../../../context/ContextProvider';
import { ShowToast } from '../../../components/Toast';
import { CommonActions } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {
        activity, setActivity
    } = UseStateContext();

    const handleLoginPress = async () => {
        setActivity(true);

        if (email.length === 0) {
            setActivity(false);
            ShowToast('error', 'Invalid Email', 'Provide Email Please.');
            setEmail('');
            return;
        }

        if (password.length === 0) {
            setActivity(false);
            ShowToast(
                'error',
                'Invalid Password!',
                'Provide Password Please.'
            );
            setPassword('');
            return;
        }

        setActivity(true);

        const userData = {
            email: email,
            password: password,
        };

        try {
            // add to db and get token
            // await AsyncStorage.setItem('userToken', 'token');
            setEmail('');
            setPassword('');
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: RouteName.BOTTOM_TAB }],
                })
            );

        } catch (error) {
            ShowToast('error', 'Sign In Failed!', error.message + '*');
        } finally {
            setActivity(false);
            setEmail('');
            setPassword('');
        }
    }

    const handleSignupPress = () => {
        navigation.navigate(RouteName.REGISTER_SCREEN);
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Image
                source={require('../../../assets/logo_transparent.png')}
                style={styles.signedLogo}
            />

            <Text style={styles.headerText}>Login</Text>

            <CustomInput label={"E-mail"} placeholder={"example@example.com"} value={email} setValue={setEmail} />
            <CustomInput label={"Password"} placeholder={"* * * * * * * *"} isSecure={true} value={password} setValue={setPassword} />

            <TouchableOpacity style={styles.signupMainButton} onPress={handleLoginPress} >
                {
                    activity
                        ?
                        <ActivityIndicator size={'small'} color={colors.UIColors.black} />
                        :
                        <Text style={styles.signupButtonText}>Login</Text>
                }
            </TouchableOpacity>

            <View style={styles.alreadyAccountTextContainer}>
                <Text style={styles.alreadyAccountText}>New to Kari App? </Text>
                <TouchableOpacity onPress={handleSignupPress} >
                    <Text style={[styles.alreadyAccountTextButton, styles.alreadyAccountTextButton]}>Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Sign in with</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.socialButtons}>
                    <Image source={require('../../../assets/gicon.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>GOOGLE</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        padding: 30,
        backgroundColor: colors.white,
        paddingHorizontal: '7%',
        paddingVertical: '5%',
    },
    signedLogo: {
        position: 'absolute',
        top: '2%',
        right: 0,
        width: 100,
        height: 100,
        opacity: 0.6
    },
    headerText: {
        fontSize: 36,
        fontWeight: '700',
        color: colors.primary,
        marginTop: '62%',
        marginBottom: '7%'
    },
    signupMainButton: {
        width: '100%',
        height: 55,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: '10%'
    },
    signupButtonText: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '500'
    },
    alreadyAccountTextContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%'
    },
    alreadyAccountText: {
        color: colors.black,
        fontSize: 16,
        textAlign: 'center',
    },
    alreadyAccountTextButton: {
        color: colors.primary,
        fontWeight: '700'
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        marginBottom: '10%'
    },
    orText: {
        marginHorizontal: 20,
        color: colors.transparentBlack,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'gray',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '7%'
    },
    socialButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 30,
        justifyContent: 'center',
        height: 55,
        width: '100%',

        elevation: 3
    },
    buttonText: {
        color: colors.black,
        marginLeft: 13,
    },
    icon: {
        width: 28,
        height: 28,
    },
});