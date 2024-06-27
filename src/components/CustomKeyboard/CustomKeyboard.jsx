import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const CustomKeyboard = ({ onKeyPress }) => {
    const [showKeyboard, setShowKeyboard] = useState(true);

    const handleKeyPress = (value) => {
        onKeyPress(value);
    };

    const handleSwitchKeyboard = () => {
        setShowKeyboard(!showKeyboard);
    }

    return (
        <View style={styles.keyboardContainer}>

            <View style={styles.rowTop}>
                <TouchableOpacity
                    onPress={() => handleKeyPress('add')}
                    style={[styles.addButton, styles.addButtonLeft]}
                >
                    <Ionicons size={23} name='add' color={colors.black} style={{ alignSelf: 'center' }} />
                    <Text className='text-sm text-slate-700 font-medium self-center ml-2'>Add More</Text>
                </TouchableOpacity>
                {
                    showKeyboard ?
                        <>
                            <TouchableOpacity
                                style={styles.addButton}
                                onPress={() => handleKeyPress('clear')}
                            >
                                <Text className='text-sm text-slate-700 font-medium self-center ml-2'>Clear</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.addButton, styles.addButtonRight]}
                                onPress={() => handleKeyPress('backspace')}
                            >
                                <Ionicons name="backspace-outline" color={colors.black} size={25} />
                            </TouchableOpacity>
                        </>
                        :
                        <TouchableOpacity
                            style={[styles.addButton, styles.addButtonRight]}
                            onPress={handleSwitchKeyboard}
                        >
                            <MaterialIcons name="keyboard-double-arrow-up" color={colors.black} size={25} />
                        </TouchableOpacity>

                }
            </View>

            {
                showKeyboard && (
                    <>
                        <View style={styles.row}>
                            {[1, 2, 3].map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    style={styles.button}
                                    onPress={() => handleKeyPress(num.toString())}
                                >
                                    <Text style={styles.buttonText}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={styles.row}>
                            {[4, 5, 6].map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    style={styles.button}
                                    onPress={() => handleKeyPress(num.toString())}
                                >
                                    <Text style={styles.buttonText}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={styles.row}>
                            {[7, 8, 9].map((num) => (
                                <TouchableOpacity
                                    key={num}
                                    style={styles.button}
                                    onPress={() => handleKeyPress(num.toString())}
                                >
                                    <Text style={styles.buttonText}>{num}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <View style={styles.row}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleKeyPress('.')}
                            >
                                <Text style={styles.buttonText}>.</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleSwitchKeyboard}
                            >
                                <MaterialIcons name="keyboard-double-arrow-down" color={colors.black} size={25} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => handleKeyPress('0')}
                            >
                                <Text style={styles.buttonText}>0</Text>
                            </TouchableOpacity>

                        </View>
                    </>
                )
            }

        </View>
    );
};

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent:'flex-end',
        marginBottom:'10%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '2.5%'
    },
    rowTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '2.5%',
        borderRadius: 100,
        borderWidth: 1
    },
    button: {
        alignItems: 'center',
        padding: '3.5%',
        width: '33.33%'
    },
    buttonText: {
        fontSize: 20,
        color: colors.black,
        fontWeight: '600'
    },
    addButton: {
        padding: '2.5%',
        borderColor: colors.transparentBlack,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    addButtonLeft: {
        borderRightWidth: 1,
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100

    },
    addButtonRight: {
        borderLeftWidth: 1,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100
    },
});

export default CustomKeyboard;