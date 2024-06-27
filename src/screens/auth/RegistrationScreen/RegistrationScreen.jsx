import React, { useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
import { CustomInput } from '../../../components/index';
import { UseStateContext } from '../../../context/ContextProvider';
import { CommonActions } from '@react-navigation/native';
import { ShowToast } from '../../../components/index';

const SignUpScreen = ({ navigation }) => {
    const {
        userInfo, setUserInfo, activity, setActivity
    } = UseStateContext();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUpPress = async () => {
        // Check if first name and last name have at least 3 characters
        if (firstName.length < 3) {
            ShowToast('error', 'First Name too Short!', 'Must have at least 3 characters.');
            return;
        }

        // Check if first name and last name have at least 3 characters
        if (lastName.length < 3) {
            ShowToast('error', 'Last Name too Short!', 'Must have at least 3 characters.');
            return;
        }

        // Check if the email is in a valid format
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
        if (!emailRegex.test(email)) {
            ShowToast('error', 'Invalid Input', 'Invalid email format.');
            return;
        }

        // Check if the password meets the criteria (lowercase, uppercase, number, and special character)
        if (password.length < 8) {
            ShowToast(
                'error',
                'Weak Password!',
                'At least 8 characters'
            );
            return;
        }

        setActivity(true);

        setUserInfo({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
        })

        try {
            // store to db
            console.log(userInfo);
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: RouteName.BOTTOM_TAB }],
                })
            );
        } catch (error) {
            if (error.response) {
                ShowToast('error', 'Sign Up Failed!', error.response.data.message + '*');
            } else if (error.request) {
                ShowToast('error', 'Sign Up Failed!', 'Request was made but no response received');
            } else {
                ShowToast('error', 'Sign Up Failed!', 'Request setup error! Try Again Later');
            }
        } finally {
            setActivity(false);
        }
    };

    const handleLoginPress = () => {
        navigation.navigate(RouteName.LOGIN_SCREEN);
    }

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor={colors.white} barStyle={'dark-content'} />
            <Image
                source={require('../../../assets/logo_transparent.png')}
                style={styles.signedLogo}
            />

            <Text style={styles.headerText}>Sign Up</Text>

            <View style={styles.rowInputsContainer}>
                <CustomInput label={"First Name"} placeholder={"John"} isRowInput={true} value={firstName} setValue={setFirstName} />
                <CustomInput label={"Last Name"} placeholder={"Doe"} isRowInput={true} value={lastName} setValue={setLastName} />
            </View>

            <CustomInput label={"E-mail"} placeholder={"example@example.com"} value={email} setValue={setEmail} />
            <CustomInput label={"Password"} placeholder={"* * * * * * * *"} isSecure={true} value={password} setValue={setPassword} />

            <TouchableOpacity style={styles.signupMainButton} onPress={handleSignUpPress} >
                {
                    activity ?
                        <ActivityIndicator size={'small'} color={colors.UIColors.black} />
                        :
                        <Text style={styles.signupButtonText}>Sign Up</Text>
                }
            </TouchableOpacity>

            <View style={styles.alreadyAccountTextContainer} >
                <Text style={styles.alreadyAccountText}>Already have an account? </Text>
                <TouchableOpacity onPress={handleLoginPress} disabled={activity} >
                    <Text style={[styles.alreadyAccountTextButton, styles.alreadyAccountTextButton]}>Sign in</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.lineContainer}>
                <View style={styles.line} />
                <Text style={styles.orText}>Sign up with</Text>
                <View style={styles.line} />
            </View>

            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.socialButtons} disabled={activity} >
                    <Image source={require('../../../assets/gicon.png')} style={styles.icon} />
                    <Text style={styles.buttonText}>GOOGLE</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

export default SignUpScreen;

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
        marginTop: '25%',
        marginBottom: '7%'
    },
    rowInputsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    errorMessage: {
        fontSize: 14,
        color: colors.primary,
        marginBottom: 10,
        alignSelf: 'center'
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