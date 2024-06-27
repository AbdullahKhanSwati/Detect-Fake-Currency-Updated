import React, { useState, createContext, useContext } from 'react';

const StateContext = createContext();

const initialState = {
    userInfo: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    },
};

const currenciesToDisplayState = ["USD", "PKR", "AED"];

export const ContextProvider = (props) => {
    const [userInfo, setUserInfo] = useState(initialState.userInfo);
    const [activity, setActivity] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState('USD');
    const [providedValue, setProvidedValue] = useState(0);
    const [currenciesToDisplay, setCurrenciesToDisplay] = useState(currenciesToDisplayState);

    return (
        <StateContext.Provider value={{
            userInfo,
            setUserInfo,
            activity,
            setActivity,
            selectedCurrency,
            setSelectedCurrency,
            providedValue,
            setProvidedValue,
            currenciesToDisplay,
            setCurrenciesToDisplay
        }}>
            {props.children}
        </StateContext.Provider>
    );
};

export const UseStateContext = () => useContext(StateContext);
