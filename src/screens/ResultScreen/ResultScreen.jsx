// import React from 'react';
// import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
// import colors from '../../utils/colors';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// const ResultScreen = ({ route, navigation }) => {
//     const { imgURL } = route.params;
//     console.log(imgURL);
//     const imageSource = require('../processedImage/processed_image.jpg');
//     return (
//         <View className='py-3 px-5' >
//             <StatusBar
//                 backgroundColor={colors.primary}
//                 barStyle={'light-content'}
//                 hidden={true}
//             />
//             <TouchableOpacity
//                 onPress={() => navigation.goBack()}
//                 className='bg-red-500 rounded-full pl-2 py-1 self-center mb-5'
//                 style={{ width: '80%' }}
//             >
//                 <Ionicons name="caret-back-circle-outline" size={40} color={colors.background} />
//             </TouchableOpacity>
//             <Text className='text-2xl text-black font-semibold mx-20' >Processed Image</Text>
//             {/* <Text className='text-xl text-black mb-5' >{imageUri}</Text> */}
//             <View style={{ width: 360, height: 300, marginTop: 50 }}>
//                 <Image
//     style={{ flex: 1, width: null, height: null }}
//     resizeMode='contain'

//     source={imageSource}
//   />
//             </View>
//         </View>
//     )
// };

// export default ResultScreen;







import React from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ResultScreen = ({ route, navigation }) => {
    const { imgURL, denomination, fakeOrReal } = route.params;

    return (
        <View className='py-3 px-5' >
            <StatusBar
                backgroundColor={colors.primary}
                barStyle={'light-content'}
                hidden={true}
            />
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='bg-red-500 rounded-full pl-2 py-1 self-center mb-5'
                style={{ width: '80%' }}
            >
                <Ionicons name="caret-back-circle-outline" size={40} color={colors.background} />
            </TouchableOpacity>
            <Text className='text-2xl text-black font-semibold mx-20' >Processed Image</Text>
            <View style={{ width: 360, height: 300, marginTop: 50 }}>
                <Image
                    style={{ flex: 1, width: null, height: null }}
                    resizeMode='contain'
                    source={{ uri: `data:image/jpeg;base64,${imgURL}` }} // Display the base64 image
                />
            </View>
            <Text className='text-xl text-black'>Denomination: {denomination}</Text>
            <Text className='text-xl text-black'>Fake or Real: {fakeOrReal}</Text>
        </View>
    );
};

export default ResultScreen;
