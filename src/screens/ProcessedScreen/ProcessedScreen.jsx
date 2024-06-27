import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity ,Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import BottomTab from '../../routes/BottomTab';
import axios from 'axios';
import BottomTabProcessed from '../../routes/BottomTabProcessed';
const ProcessedScreen = ({ route, navigation }) => {
    const { imgURL } = route.params;
    // console.log("URL in ProcessedScreen:", imgURL);

   const sendImageToServer = async () => {
    try {
      
      const response = await axios.post('http://192.168.39.27:5002/predict', {
        base64Image: imgURL,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
  
      console.log('Image sent to server from processed');
      const result  = response.data;
      // const imageUri = `data:image/png;base64,${result}`;
      console.log('Image URI:', result);
    
    Alert.alert('Result', `Denomination: ${result.denomination}, Fake/Real: ${result.fake_or_real}`);

   
    // navigation.navigate(RouteName.RESULT_SCREEN, { 
    //     denomination: result.denomination,
    //   fakeOrReal: result.fake_or_real,
    //   imgURL: base64Image
    //    })   
      return result;
    } catch (error) {
      console.log('Error sending image to server:', error.message);             
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











