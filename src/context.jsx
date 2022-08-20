import React, { useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
 return <AppContext.Provider value="test">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
 return useContext(AppContext);
};
