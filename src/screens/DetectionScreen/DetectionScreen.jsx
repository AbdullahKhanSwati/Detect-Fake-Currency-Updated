import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  LogBox,
  PermissionsAndroid
} from 'react-native';
import { UseStateContext } from '../../context/ContextProvider';
import { RNCamera } from 'react-native-camera';
import ImageToBase64 from 'react-native-image-base64';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../utils/colors';
import * as ImagePicker from 'react-native-image-picker';
import RouteName from '../../routes/RouteName';
LogBox.ignoreAllLogs();
import { decode, encode } from 'base-64';
import AnimatedLoader from "react-native-animated-loader";
// import LoaderKit from 'react-native-loader-kit'
import LoaderKit from 'react-native-loader-kit'
import axios from 'axios';
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}


const { height, width } = colors;

const DetectionScreen = ({ navigation }) => {
  const { userInfo, setUserInfo } = UseStateContext();
  const [imageUri, setImageUri] = useState(null);
  const [loader, setLoader] = useState(false);
  const [zoom, setZoom] = useState(0);
  const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
  const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
  const [myImg, setMyImg] = useState("");
  const [visible, setVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {
    checkCameraPermission();





    // console.log("test")
    // fetch('http://localhost:5000/',{method:"GET"}).then(res=>res.json()).then(jres=>console.log(jres)).catch(err=>console.log(err))


  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      setImageUri(null);
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    checkCameraPermission();
  }, []);

  const checkCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'This app needs access to your camera.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        // console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // const sendImageToServer = async (base64Image) => {
  //   try {

  //     const response = await fetch('http://127.0.0.1:5000/upload_image', {
  //       method: 'POST',
  //       body: {
  //         base64Image: base64Image
  //       },
  //     });

  //     console.log('Image sent to server');
  //     const result = await response.json();
  //     return result;
  //   } catch (error) {
  //     console.log('Error sending image to server:', error);
  //     return null;
  //   } finally {
  //     console.log("Finally Called!");
  //   }
  // };




  // const sendImageToServer = async (base64Image) => {
  //   try {

  //     const response = await axios.post('http://192.168.187.27:5002/predict', {
  //       base64Image: base64Image,
  //     }, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },

  //     });

  //     console.log('Image sent to server');
  //     const result  = response.data;
  //     // const imageUri = `data:image/png;base64,${result}`;
  //     console.log('Image URI:', result);

  //   Alert.alert('Result', `Denomination: ${result.denomination}, Fake/Real: ${result.fake_or_real}`);


  //   navigation.navigate(RouteName.RESULT_SCREEN, { 
  //       denomination: result.denomination,
  //     fakeOrReal: result.fake_or_real,
  //     imgURL: base64Image
  //      })   
  //     return result;
  //   } catch (error) {
  //     console.log('Error sending image to server:', error.message);             
  //     return null;
  //   } finally {
  //     console.log("Finally Called!");
  //   }
  // };




  const sendImageToServer = async (base64Image) => {
    try {
      // setLoader(true);
      const response = await axios.post('http://192.168.39.27:5002/preProcess', {
        base64Image: base64Image,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },

      });

      console.log('Image sent to server');
      const result = response.data.processedImage;

      // const imageUri = `data:image/png;base64,${result}`;
      // console.log('Image URI detection:', result);
      setMyImg(result);
      navigation.navigate(RouteName.PROCESSED_SCREEN, {

        imgURL: result
      })
      return result;
    } catch (error) {
      console.log('Error sending image to server:', error.message);
      return null;
    } finally {
      // setLoader(false);
      console.log("Finally Called!");
    }
  };






  // const sendImageToServer = async (base64Image) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append('base64Image', base64Image);

  //     const response = await axios.post('http://127.0.0.1:5000/upload_image', formData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     console.log('Image sent to server');
  //     const result = response.data;
  //     return result;
  //   } catch (error) {
  //     console.log('Error sending image to server:', error);
  //     return null;
  //   } finally {
  //     console.log('Finally Called!');
  //   }
  // };








  // async function takePicture() {
  //   if (ref.current) {
  //     setLoader(true);
  //     const options = { base64: true, fixOrientation: true, writeExif: true };
  //     const data = await ref.current.takePictureAsync(options);
  //     setImageUri(data.uri);
  //     setLoader(false);

  //     // Convert the captured image to base64
  //     ImageToBase64.getBase64String(data.uri)
  //       .then(base64Image => {

  //         // Send the base64Image to the Flask server

  //       })
  //       .catch(error => {
  //         console.log('Error:', error);
  //       })
  //       .finally(() => {
  //         console.log('success');
  //       });
  //   }
  // }


  async function takePicture() {
    if (ref.current) {
      // setLoader(true);

      try {
        const options = { base64: true, fixOrientation: true, writeExif: true };
        const data = await ref.current.takePictureAsync(options);
        setImageUri(data.uri);

        // Convert the captured image to base64
        ImageToBase64.getBase64String(data.uri)
          .then(base64Image => {

            // Send the base64Image to the Flask server
            sendImageToServer(base64Image);
          })
          .catch(error => {
            console.log('Error converting to base64:', error);
          })
          .finally(() => {
            // setLoader(false);
            console.log('Conversion to base64 successful');
          });
      } catch (error) {
        console.log('Error taking picture:', error);
        // setLoader(false);
      }
    }
  }


  function handleZoomIn() {
    if (zoom < 1) {
      setZoom(zoom + 0.1);
    }
  }

  function handleZoomOut() {
    if (zoom > 0) {
      setZoom(zoom - 0.1);
    }
  }

  function handleToggleFlash() {
    setFlashMode(prevMode =>
      prevMode === RNCamera.Constants.FlashMode.off
        ? RNCamera.Constants.FlashMode.torch
        : RNCamera.Constants.FlashMode.off,
    );
  }

  function handleToggleCameraType() {
    setCameraType(prevType =>
      prevType === RNCamera.Constants.Type.back
        ? RNCamera.Constants.Type.front
        : RNCamera.Constants.Type.back,
    );
  }

  function handleImageLibrary() {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setImageUri(selectedImage.uri);
      }
    });
  }


  const handleConfirmImage = async () => {
    try {
      // Convert the captured image to base64
      const base64Image = await ImageToBase64.getBase64String(imageUri);

      setVisible(true);
      const img = await sendImageToServer(base64Image);

      // console.log("image Received", JSON.stringify(img));
      if (img) {
        navigation.navigate(RouteName.PROCESSED_SCREEN, { imgURL: img });
      }
    } catch (error) {
      console.log('Error:', error);
    } finally {
      console.log('success');
      setVisible(false);
    }
  };
  // const handleConfirmImage =  () => {
  //   // Convert the captured image to base64
  //   ImageToBase64.getBase64String(imageUri)
  //     .then(base64Image => {

  //       const img = sendImageToServer(base64Image);

  //       console.log("image Received", JSON.stringify(img));
  //       navigation.navigate(RouteName.PROCESSED_SCREEN, { imgURL: myImg })    
  //     })
  //     .catch(error => {

  //       console.log('Error:', error);

  //     })
  //     .finally(() => {
  //       console.log('success');
  //     });
  // }

  // const handleConfirmImage = ()=>{
  //   try {
  //     navigation.navigate(RouteName.RESULT_SCREEN)
  //   } catch (error) {
  //     console.log('Error:', error);
  //   }
  // }

  function handleRetakeImage() {
    setImageUri(null);
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle={'light-content'}
      />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}>
        <Ionicons name="close" size={35} color={colors.background} />
      </TouchableOpacity>
      {!imageUri ? (
        <View style={styles.subContainer}>
          <RNCamera
            ref={ref}
            style={styles.preview}
            type={cameraType}
            flashMode={flashMode}
            zoom={zoom}
            captureAudio={false}
            useNativeZoom={true}>
            {({ camera, status }) => {
              if (status !== 'READY') return <></>;
              return (
                <View style={styles.cameraContainer}>
                  <View style={styles.topRightButtonsContainer}>
                    <TouchableOpacity
                      style={styles.topRightButton}
                      onPress={handleToggleFlash}>
                      <Ionicons
                        name={
                          flashMode === RNCamera.Constants.FlashMode.off
                            ? 'flash-off'
                            : 'flash'
                        }
                        size={25}
                        color={colors.background}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.topRightButton}
                      onPress={handleZoomIn}>
                      <Ionicons
                        name="add-circle"
                        size={25}
                        color={colors.background}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.topRightButton}
                      onPress={handleZoomOut}>
                      <Ionicons
                        name="remove-circle"
                        size={25}
                        color={colors.background}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          </RNCamera>
          <View style={styles.lowerButtonContainer}>
            <TouchableOpacity
              onPress={handleImageLibrary}
              style={styles.libraryButton}>
              <Ionicons name="images" size={25} color={colors.white} />
            </TouchableOpacity>
            <View style={styles.captureContainer}>
              <TouchableOpacity
                onPress={takePicture}
                style={styles.captureButton}>
                {loader ? (
                  <ActivityIndicator color="black" size={60} />
                ) : (
                  <View style={styles.captureButtonInner} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.libraryButton}
              onPress={handleToggleCameraType}>
              <Ionicons
                name="camera-reverse"
                size={25}
                color={colors.background}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: imageUri }} resizeMode='contain' style={styles.preview2} />
          <View style={styles.retakeButtonContainer}>
            <TouchableOpacity
              onPress={handleRetakeImage}
              style={styles.confirmButton}>
              <Ionicons name="refresh" size={30} color={colors.background} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleConfirmImage}
              style={styles.confirmButton}>
              <Ionicons name="checkmark" size={30} color={colors.background} />
            </TouchableOpacity>
          </View>

        </View>
      )}

      {/* {visible && (
        <View>
          <AnimatedLoader
      visible={visible}
      overlayColor="rgba(255,255,255,0.75)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text>Doing something...</Text>
    </AnimatedLoader>
        </View>
      )} */}
      {visible && 
      <LoaderKit
        style={styles.loaderContainer}
        name={'LineSpinFadeLoader'} // Optional: see list of animations below
        color={'white'} // Optional: color can be: 'red', 'green',... or '#ddd', '#ffffff',...

      />
      
        
      }
    </View>
  );
};

export default DetectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary,
  },
  confirmContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  lottie: {
    width: 100,
    height: 100,

  },
  subContainer: {
    height: height * 0.8,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  lowerButtonContainer: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: height * 0.2,
    paddingBottom: height * 0.04,
  },
  loaderContainer: {
    position: 'absolute',
    top: 170,
    bottom: 0,
    left: 0,
    right: 0,
   borderRadius:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 5,
  },
  topRightButtonsContainer: {
    top: height * 0.02,
    left: width * 0.4,
    flexDirection: 'column',
  },
  topRightButton: {
    padding: height * 0.012,
  },
  captureContainer: {
    alignItems: 'center',
  },
  captureButton: {
    padding: 10,
    borderRadius: height * 0.1,
    borderWidth: 2,
    borderColor: colors.white,
  },
  captureButtonInner: {
    backgroundColor: colors.white,
    borderRadius: height * 0.1,
    width: 60,
    height: 60,
  },
  imagePreviewContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  confirmButton: {
    borderRadius: height * 0.1,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.white,
  },
  libraryButton: {
    borderRadius: height * 0.1,
    padding: 10,
    borderWidth: 2,
    borderColor: colors.white,
  },
  preview: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  preview2: {
    width: '100%',
    height: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  retakeButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    height: '10%',
  },
  closeButton: {
    position: 'absolute',
    top: height * 0.03,
    left: width * 0.05,
    zIndex: 999,
    backgroundColor: colors.primary,
    borderRadius: height * 0.9,
  },
});



// import React, { useState, useRef, useEffect } from 'react';
// import {
//   View,
//   ActivityIndicator,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   Image,
//   StatusBar,
//   LogBox,
//   PermissionsAndroid
// } from 'react-native';
// import { UseStateContext } from '../../context/ContextProvider';
// import { RNCamera } from 'react-native-camera';
// import ImageToBase64 from 'react-native-image-base64';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import colors from '../../utils/colors';
// import * as ImagePicker from 'react-native-image-picker';
// import RouteName from '../../routes/RouteName';
// LogBox.ignoreAllLogs();
// import { decode, encode } from 'base-64';
// import LoaderKit from 'react-native-loader-kit';
// import axios from 'axios';

// if (!global.btoa) {
//   global.btoa = encode;
// }

// if (!global.atob) {
//   global.atob = decode;
// }

// const { height, width } = colors;

// const DetectionScreen = ({ navigation }) => {
//   const { userInfo, setUserInfo } = UseStateContext();
//   const [imageUri, setImageUri] = useState(null);
//   const [loader, setLoader] = useState(false);
//   const [zoom, setZoom] = useState(0);
//   const [flashMode, setFlashMode] = useState(RNCamera.Constants.FlashMode.off);
//   const [cameraType, setCameraType] = useState(RNCamera.Constants.Type.back);
//   const [myImg, setMyImg] = useState("");

//   const ref = useRef();

//   useEffect(() => {
//     checkCameraPermission();

//     // console.log("test")
//     // fetch('http://localhost:5000/',{method:"GET"}).then(res=>res.json()).then(jres=>console.log(jres)).catch(err=>console.log(err))
//   }, []);

//   useEffect(() => {
//     const unsubscribe = navigation.addListener('blur', () => {
//       setImageUri(null);
//     });

//     return unsubscribe;
//   }, [navigation]);

//   useEffect(() => {
//     checkCameraPermission();
//   }, []);

//   const checkCameraPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title: 'Camera Permission',
//           message: 'This app needs access to your camera.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         },
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         // console.log('Camera permission granted');
//       } else {
//         console.log('Camera permission denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   };

//   const sendImageToServer = async (base64Image) => {
//     try {
//       setLoader(true);
//       const response = await axios.post('http://192.168.100.27:5002/preProcess', {
//         base64Image: base64Image,
//       }, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Image sent to server');
//       const result = response.data.processedImage;

//       setMyImg(result);
//       navigation.navigate(RouteName.PROCESSED_SCREEN, {
//         imgURL: result
//       });
//       return result;
//     } catch (error) {
//       console.log('Error sending image to server:', error.message);
//       return null;
//     } finally {
//       setLoader(false);
//       console.log("Finally Called!");
//     }
//   };

//   async function takePicture() {
//     if (ref.current) {
//       setLoader(true);

//       try {
//         const options = { base64: true, fixOrientation: true, writeExif: true };
//         const data = await ref.current.takePictureAsync(options);
//         setImageUri(data.uri);

//         // Convert the captured image to base64
//         ImageToBase64.getBase64String(data.uri)
//           .then(base64Image => {

//             // Send the base64Image to the Flask server
//             sendImageToServer(base64Image);
//           })
//           .catch(error => {
//             console.log('Error converting to base64:', error);
//           })
//           .finally(() => {
//             setLoader(false);
//             console.log('Conversion to base64 successful');
//           });
//       } catch (error) {
//         console.log('Error taking picture:', error);
//         setLoader(false);
//       }
//     }
//   }

//   function handleZoomIn() {
//     if (zoom < 1) {
//       setZoom(zoom + 0.1);
//     }
//   }

//   function handleZoomOut() {
//     if (zoom > 0) {
//       setZoom(zoom - 0.1);
//     }
//   }

//   function handleToggleFlash() {
//     setFlashMode(prevMode =>
//       prevMode === RNCamera.Constants.FlashMode.off
//         ? RNCamera.Constants.FlashMode.torch
//         : RNCamera.Constants.FlashMode.off,
//     );
//   }

//   function handleToggleCameraType() {
//     setCameraType(prevType =>
//       prevType === RNCamera.Constants.Type.back
//         ? RNCamera.Constants.Type.front
//         : RNCamera.Constants.Type.back,
//     );
//   }

//   function handleImageLibrary() {
//     const options = {
//       mediaType: 'photo',
//       quality: 1,
//     };

//     ImagePicker.launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         // console.log('User cancelled image picker');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.assets && response.assets.length > 0) {
//         const selectedImage = response.assets[0];
//         setImageUri(selectedImage.uri);
//       }
//     });
//   }

//   const handleConfirmImage = async () => {
//     try {
//       const base64Image = await ImageToBase64.getBase64String(imageUri);
//       const img = await sendImageToServer(base64Image);

//       if (img) {
//         navigation.navigate(RouteName.PROCESSED_SCREEN, { imgURL: img });
//       }
//     } catch (error) {
//       console.log('Error:', error);
//     } finally {
//       console.log('success');
//     }
//   };

//   function handleRetakeImage() {
//     setImageUri(null);
//   }

//   return (
//     <View style={styles.container}>
//       <StatusBar
//         backgroundColor={colors.primary}
//         barStyle={'light-content'}
//       />
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={styles.closeButton}>
//         <Ionicons name="close" size={35} color={colors.background} />
//       </TouchableOpacity>
//       {!imageUri ? (
//         <View style={styles.subContainer}>
//           <RNCamera
//             ref={ref}
//             style={styles.preview}
//             type={cameraType}
//             flashMode={flashMode}
//             zoom={zoom}
//             captureAudio={false}
//             useNativeZoom={true}>
//             {({ camera, status }) => {
//               if (status !== 'READY') return <></>;
//               return (
//                 <View style={styles.cameraContainer}>
//                   <View style={styles.topRightButtonsContainer}>
//                     <TouchableOpacity
//                       style={styles.topRightButton}
//                       onPress={handleToggleFlash}>
//                       <Ionicons
//                         name={
//                           flashMode === RNCamera.Constants.FlashMode.off
//                             ? 'flash-off'
//                             : 'flash'
//                         }
//                         size={25}
//                         color={colors.background}
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       style={styles.topRightButton}
//                       onPress={handleZoomIn}>
//                       <Ionicons
//                         name="add-circle"
//                         size={25}
//                         color={colors.background}
//                       />
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                       style={styles.topRightButton}
//                       onPress={handleZoomOut}>
//                       <Ionicons
//                         name="remove-circle"
//                         size={25}
//                         color={colors.background}
//                       />
//                     </TouchableOpacity>
//                   </View>
//                 </View>
//               );
//             }}
//           </RNCamera>
//           <View style={styles.lowerButtonContainer}>
//             <TouchableOpacity
//               onPress={handleImageLibrary}
//               style={styles.libraryButton}>
//               <Ionicons name="images" size={25} color={colors.white} />
//             </TouchableOpacity>
//             <View style={styles.captureContainer}>
//               <TouchableOpacity
//                 onPress={takePicture}
//                 style={styles.captureButton}>
//                 {loader ? (
//                   <ActivityIndicator color="black" size={60} />
//                 ) : (
//                   <View style={styles.captureButtonInner} />
//                 )}
//               </TouchableOpacity>
//             </View>
//             <TouchableOpacity
//               style={styles.libraryButton}
//               onPress={handleToggleCameraType}>
//               <Ionicons
//                 name="camera-reverse"
//                 size={25}
//                 color={colors.background}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       ) : (
//         <View style={styles.imagePreviewContainer}>
//           <Image source={{ uri: imageUri }} resizeMode='contain' style={styles.preview2} />
//           <View style={styles.retakeButtonContainer}>
//             <TouchableOpacity
//               onPress={handleRetakeImage}
//               style={styles.confirmButton}>
//               <Ionicons name="refresh" size={30} color={colors.background} />
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={handleConfirmImage}
//               style={styles.confirmButton}>
//               <Ionicons name="checkmark" size={30} color={colors.background} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       )}
//       {loader && (
//         <View style={styles.loaderContainer}>
//           <LoaderKit
//             style={styles.loader}
//             name={'BallPulse'}
//             size={60}
//             color={colors.primary}
//           />
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.primary,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 40,
//     left: 20,
//     zIndex: 1,
//   },
//   subContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     width: '100%',
//   },
//   captureButton: {
//     backgroundColor: colors.background,
//     height: 70,
//     width: 70,
//     borderRadius: 35,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   captureButtonInner: {
//     backgroundColor: colors.white,
//     height: 60,
//     width: 60,
//     borderRadius: 30,
//     borderWidth: 2,
//     borderColor: colors.primary,
//   },
//   lowerButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '80%',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   libraryButton: {
//     backgroundColor: colors.background,
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   confirmButton: {
//     backgroundColor: colors.white,
//     height: 60,
//     width: 60,
//     borderRadius: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 20,
//   },
//   imagePreviewContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   preview2: {
//     height: '100%',
//     width: '100%',
//   },
//   retakeButtonContainer: {
//     position: 'absolute',
//     bottom: 30,
//     flexDirection: 'row',
//   },
//   cameraContainer: {
//     flex: 1,
//     justifyContent: 'space-between',
//   },
//   topRightButtonsContainer: {
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//     marginTop: 10,
//     marginRight: 10,
//   },
//   topRightButton: {
//     backgroundColor: colors.primary,
//     height: 40,
//     width: 40,
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   captureContainer: {
//     backgroundColor: colors.white,
//     height: 90,
//     width: 90,
//     borderRadius: 45,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   loaderContainer: {
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     zIndex: 1,
//   },
//   loader: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default DetectionScreen;
