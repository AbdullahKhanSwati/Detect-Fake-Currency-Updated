import React from 'react';
import StackNavigation from './src/routes/StackNavigation';
import { ContextProvider } from './src/context/ContextProvider';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const App = () => {
  // const toastConfig = {
  //   success: async (props) => {
  //     // Handle asynchronous behavior here if needed
  //     return (
  //       <BaseToast
  //         {...props}
  //         style={{ borderLeftColor: 'pink' }}
  //         contentContainerStyle={{ paddingHorizontal: 15 }}
  //         text1Style={{
  //           fontSize: 15,
  //           fontWeight: '700'
  //         }}
  //         text2Style={{
  //           fontSize: 15
  //         }}
  //       />
  //     );
  //   },
  //   error: async (props) => {
  //     // Handle asynchronous behavior here if needed
  //     return (
  //       <ErrorToast
  //         {...props}
  //         text1Style={{
  //           fontSize: 15,
  //           fontWeight: '700'
  //         }}
  //         text2Style={{
  //           fontSize: 15
  //         }}
  //       />
  //     );
  //   },
  // };

  return (
    <ContextProvider>
      <StackNavigation />
      {/* <Toast config={toastConfig} /> */}
      <Toast />
    </ContextProvider>
  );
};

export default App;
