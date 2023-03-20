import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [config, setConfig] = useState({});
  const [userData, setUserData] = useState({});
  const [userHabits, setUserHabits] = useState([])

  return (
    <UserContext.Provider value={{ config, setConfig, userData, setUserData, userHabits, setUserHabits }}>
      {children}
    </UserContext.Provider>
  );
};
