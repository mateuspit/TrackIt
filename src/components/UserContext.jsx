import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [config, setConfig] = useState({});
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ config, setConfig, userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
