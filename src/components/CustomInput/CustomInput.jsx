import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from '../../utils/colors';

const CustomInput = ({ label, placeholder, isSecure = false, isRowInput = false, inputMode = "text", value, setValue }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleTextChange = (text) => {
        setValue(text);
    };

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{label}</Text>
            <TextInput
                value={value}
                placeholder={placeholder}
                inputMode={inputMode}
                placeholderTextColor={colors.transparentBlack}
                secureTextEntry={isSecure}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChangeText={handleTextChange}
                style={[
                    styles.inputField,
                    isFocused ? styles.activeInput : {},
                    isRowInput && { width: '90%' },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputLabel: {
        fontSize: 16,
        color: colors.transparentBlack,
        marginBottom: 5,
    },
    inputContainer: {
        marginBottom: '10%',
        flex: 1,
    },
    inputField: {
        width: '100%',
        height: 65,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        fontSize: 18,
        fontWeight: '400',
        color: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeInput: {
        borderColor: colors.primary,
        backgroundColor: colors.white,
        borderWidth: 2,
        elevation: 3,
    },
});

export default CustomInput;