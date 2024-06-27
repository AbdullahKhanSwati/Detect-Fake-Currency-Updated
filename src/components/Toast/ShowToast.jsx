import Toast from 'react-native-toast-message';

const showToast = (type, message, description) => {
    Toast.show({
        type: type,
        text1: message,
        text2: description,
    });
};

export default showToast;