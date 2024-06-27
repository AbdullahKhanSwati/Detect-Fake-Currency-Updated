import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CountryFlag from "react-native-country-flag";
import { UseStateContext } from '../../context/ContextProvider';

const CurrencyCard = ({ data }) => {
    const { setSelectedCurrency, providedValue, selectedCurrency } = UseStateContext();
    const flagCode = data.code.slice(0, 2);

    const handleClick = () => {
        setSelectedCurrency(data.code);
    }


    return (
        <TouchableOpacity
            className={`flex flex-row justify-between items-center bg-yellow mb-3 rounded ${selectedCurrency === data.code ? "border border-blue-200 transition" : "bg-blue-100 transitions"}`}
            onPress={handleClick}
        >
            <View className="flex flex-row" >
                <CountryFlag isoCode={flagCode} size={45} className="rounded-md mr-3" />

                <View className="flex flex-column align-middle justify-center ">
                    <Text className='text-sm text-slate-500 font-medium' >{data.code}</Text>
                    <Text className='text-sm text-black font-medium' >{data.name}</Text>
                </View>
            </View>
            <View className="flex flex-row align-middle justify-center">
                <Text className='text-base text-orange-700 font-medium mr-1 self-center '>{data.symbol}</Text>
                <Text className='text-xl text-orange-700 font-medium mr-2 self-center '>{selectedCurrency === data.code ? providedValue : 0}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CurrencyCard;