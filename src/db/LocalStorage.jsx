// saving and reading user preference currencies for conversion
import AsyncStorage from '@react-native-async-storage/async-storage';

// To save user preferences
export const saveUserPreferences = async (currenciesToDisplay) => {
    try {
        await AsyncStorage.setItem('userCurrencies', JSON.stringify(currenciesToDisplay));
    } catch (error) {
        console.error('Error saving user preferences:', error);
    }
};

// To retrieve user preferences
export const getUserPreferences = async () => {
    try {
        const userCurrencies = await AsyncStorage.getItem('userCurrencies');
        return userCurrencies ? JSON.parse(userCurrencies) : [];
    } catch (error) {
        console.error('Error retrieving user preferences:', error);
        return [];
    }
};
