"use client";
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext({});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authUser, setAuthUser] = useState<any>(null);

  const value: { authUser: any; setAuthUser: any } = {
    authUser,
    setAuthUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
