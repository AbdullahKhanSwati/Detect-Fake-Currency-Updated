import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity ,Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import BottomTab from '../../routes/BottomTab';
import RouteName from '../../routes/RouteName';
import axios from 'axios';
import BottomTabProcessed from '../../routes/BottomTabProcessed';
const ProcessedScreen = ({ route, navigation }) => {
    const { imgURL } = route.params;
    // console.log("URL in ProcessedScreen:", imgURL);

  //   const sendImageToServer = async () => {
  //     try {
  //         const response = await axios.post('http://192.168.100.27:5002/predict', {
  //             base64Image: imgURL,
  //         }, {
  //             headers: {
  //                 'Content-Type': 'application/json',
  //             },
  //         });
  
  //         console.log('Image sent to server successfully');
  //         const result = response.data;
  //         Alert.alert('Result', `Denomination: ${result.denomination}, Fake/Real: ${result.fake_or_real}`);
  //         // if (result.error) {
  //         //     Alert.alert('Error', result.error);
  //         // } else if (result.denomination) {
  //         //     Alert.alert('Result', `Denomination: ${result.denomination}, Fake/Real: ${result.fake_or_real}`);
  //         // } 
  //         // else if(result.denomination == 0){
  //         //   Alert.alert('Retry', 'not the currency image');
  //         // }
  //         // else {
  //         //     Alert.alert('Unknown Response', 'Unexpected response from server');
  //         // }
  
  //         return result;
  //     } catch (error) {
  //         console.log('Error sending image to server:', error.message);
  //         Alert.alert('Error', 'Failed to send image to server');
  //         return null;
  //     } finally {
  //         console.log("Finally Called!");
  //     }
  // };
  
  

  const sendImageToServer = async () => {
    try {
        const response = await axios.post('http://192.168.100.27:5002/predict', {
            base64Image: imgURL,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Image sent to server successfully');
        const result = response.data;

        if (result.error) {
            Alert.alert('Retry...', result.error, [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate(RouteName.DETECTION_SCREEN)
                }
            ]);
        } else if (result.denomination && result.fake_or_real) {
            Alert.alert('Result', `Denomination: ${result.denomination}, Fake/Real: ${result.fake_or_real}`, [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate(RouteName.DETECTION_SCREEN)
                }
            ]);
        } else {
            Alert.alert('Unknown Response', 'Unexpected response from server', [
                {
                    text: 'OK',
                    onPress: () => navigation.navigate(RouteName.DETECTION_SCREEN)
                }
            ]);
        }
        
        return result;
    } catch (error) {
        console.log('Error sending image to server:', error.message);
        Alert.alert('Error', 'Failed to send image to server', [
            {
                text: 'OK',
                onPress: () => navigation.navigate(RouteName.DETECTION_SCREEN)
            }
        ]);
        return null;
    } finally {
        console.log("Finally Called!");
    }
};



    return (
        <>
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}>
                <Ionicons name="caret-back-circle-outline" size={40} color={colors.background} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Processed Image</Text>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    resizeMode='contain'
                    source={{ uri: `data:image/jpeg;base64,${imgURL}` }} // Use the correct base64 format
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={sendImageToServer}>
            <Text style={styles.buttonText}>Authenticate</Text>
        </TouchableOpacity>
        </View>
       {/* <BottomTabProcessed/> */}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        // marginBottom: 20,
    },
    imageContainer: {
        width: '90%',
        height: '40%',
        alignItems:"center",
        // justifyContent:"flex-start",
        // borderWidth: 1,
        // borderColor: 'black',
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    button: {
        backgroundColor: '#6200EE',
        paddingVertical: 12,
        paddingHorizontal: 46,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProcessedScreen;











