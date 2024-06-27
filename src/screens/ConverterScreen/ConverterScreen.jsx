import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ConverterScreen = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  const API_KEY = 'https://v6.exchangerate-api.com/v6/2c071c8f4bf48ea56db5a399/latest/USD';
  const API_URL = `https://open.er-api.com/v6/latest/${fromCurrency}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const rate = data.rates[toCurrency];

        setExchangeRate(rate);
       console.log("conversion")
       
      } catch (error) {
        console.error('Error fetching exchange rates', error);
      }
    };

    fetchData();
  }, [fromCurrency, toCurrency]);

  const handleConvert = () => {
    if (!amount || isNaN(amount)) {
      alert('Please enter a valid amount.');
      return;
    }

    const convertedValue = (amount * exchangeRate).toFixed(2);
    setConvertedAmount(convertedValue);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Amount:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        keyboardType="numeric"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />

      <Text>From Currency:</Text>
      <Picker
        selectedValue={fromCurrency}
        onValueChange={(itemValue) => setFromCurrency(itemValue)}
      >
        {/* Add your currency options here */}
        <Picker.Item label="PKR" value="PKR" />
        <Picker.Item label="AED" value="AED" />
        <Picker.Item label="AFN" value="AFN" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="BDT" value="AFN" />
        <Picker.Item label="BSD" value="BSD" />
        <Picker.Item label="ERN" value="ERN" />
        <Picker.Item label="KZT" value="KZT" />

        {/* Add more currencies as needed */}
      </Picker>

      <Text>To Currency:</Text>
      <Picker
        selectedValue={toCurrency}
        onValueChange={(itemValue) => setToCurrency(itemValue)}
      >
        {/* Add your currency options here */}
        <Picker.Item label="PKR" value="PKR" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="AED" value="AED" />
        <Picker.Item label="AFN" value="AFN" />
        <Picker.Item label="BDT" value="AFN" />
        <Picker.Item label="BSD" value="BSD" />
        <Picker.Item label="ERN" value="ERN" />
        <Picker.Item label="KZT" value="KZT" />

        


        {/* Add more currencies as needed */}
      </Picker>

      <Button title="Convert" onPress={handleConvert} />

      {convertedAmount && (
        <Text style={{ marginTop: 30 }}>
          Converted Amount: <Text style={{fontSize:20 , fontWeight:"bold"}}>{convertedAmount} {toCurrency}</Text>
        </Text>
      )}
    </View>
  );
};

export default ConverterScreen;





















// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const ConverterScreen = () => {
//   const [amount, setAmount] = useState('');
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('EUR');
//   const [convertedAmount, setConvertedAmount] = useState(null);
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const [interbankExchangeRate, setInterbankExchangeRate] = useState(null);

//   const API_KEY = 'https://v6.exchangerate-api.com/v6/2c071c8f4bf48ea56db5a399/latest/USD';
//   const API_URL = `https://open.er-api.com/v6/latest/${fromCurrency}`;
//   const INTERBANK_API_URL = 'https://api.example.com/interbank-rates'; // Replace with the actual URL

//   useEffect(() => {
//     const fetchExchangeRate = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         const rate = data.rates[toCurrency];
//         setExchangeRate(rate);
//       } catch (error) {
//         console.error('Error fetching exchange rates', error);
//       }
//     };

//     const fetchInterbankExchangeRate = async () => {
//       try {
//         const response = await fetch(INTERBANK_API_URL);
//         const data = await response.json();
//         const interbankRate = data.interbankRates[toCurrency];
//         setInterbankExchangeRate(interbankRate);
//       } catch (error) {
//         console.error('Error fetching interbank exchange rates', error);
//       }
//     };

//     fetchExchangeRate();
//     fetchInterbankExchangeRate();
//   }, [fromCurrency, toCurrency]);

//   const handleConvert = () => {
//     if (!amount || isNaN(amount)) {
//       alert('Please enter a valid amount.');
//       return;
//     }

//     const convertedValue = (amount * exchangeRate).toFixed(2);
//     setConvertedAmount(convertedValue);
//   };

//   const handleConvertInterbank = () => {
//     if (!amount || isNaN(amount)) {
//       alert('Please enter a valid amount.');
//       return;
//     }

//     const convertedValue = (amount * interbankExchangeRate).toFixed(2);
//     setConvertedAmount(convertedValue);
//   };

//   return (
//     <View style={{ padding: 20 }}>
//       <Text>Amount:</Text>
//       <TextInput
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
//         keyboardType="numeric"
//         value={amount}
//         onChangeText={(text) => setAmount(text)}
//       />

//       <Text>From Currency:</Text>
//       <Picker
//         selectedValue={fromCurrency}
//         onValueChange={(itemValue) => setFromCurrency(itemValue)}
//       >
//         {/* Add your currency options here */}

//         {/* ... */}
//         <Picker.Item label="PKR" value="PKR" />
// //         <Picker.Item label="AED" value="AED" />
// //         <Picker.Item label="AFN" value="AFN" />
// //         <Picker.Item label="USD" value="USD" />
// //         <Picker.Item label="EUR" value="EUR" />
// //         <Picker.Item label="BDT" value="AFN" />
// //         <Picker.Item label="BSD" value="BSD" />
// //         <Picker.Item label="ERN" value="ERN" />
// //         <Picker.Item label="KZT" value="KZT" />

//       </Picker>

//       <Text>To Currency:</Text>
//       <Picker
//         selectedValue={toCurrency}
//         onValueChange={(itemValue) => setToCurrency(itemValue)}
//       >
//        <Picker.Item label="PKR" value="PKR" />
// //         <Picker.Item label="EUR" value="EUR" />
// //         <Picker.Item label="USD" value="USD" />
// //         <Picker.Item label="AED" value="AED" />
// //         <Picker.Item label="AFN" value="AFN" />
// //         <Picker.Item label="BDT" value="AFN" />
// //         <Picker.Item label="BSD" value="BSD" />
// //         <Picker.Item label="ERN" value="ERN" />
// //         <Picker.Item label="KZT" value="KZT" />
//       </Picker>

//       <Button title="Convert Open Market" onPress={handleConvert} />
//       <Button title="Convert Interbank" onPress={handleConvertInterbank} />

//       {convertedAmount && (
//         <Text style={{ marginTop: 30 }}>
//           Converted Amount: <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{convertedAmount} {toCurrency}</Text>
//         </Text>
//       )}
//     </View>
//   );
// };

// export default ConverterScreen;
