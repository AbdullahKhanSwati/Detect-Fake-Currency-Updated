import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

const colors = {
    primary: 'rgb(212,93,58)',
    secondary: '#49F6B9',
    white: '#FDFDFD',
    black: '#313037',
    transparentBlack: 'rgba(0,0,0,0.5)',
    
    // dimensions
    height,
    width,
};

export default colors;