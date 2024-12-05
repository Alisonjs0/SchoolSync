"use client"

import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    
    const [userData, setUserData] = useState({ logado: false });

    useEffect(() => {
      if (typeof window !== "undefined") {
        const storedUserData = sessionStorage.getItem("userData");
        if (storedUserData) {
          setUserData(JSON.parse(storedUserData));
        }
      }
    }, []);
  
    useEffect(() => {
      if (userData.logado) {
        sessionStorage.setItem("userData", JSON.stringify(userData));
      } else {
        sessionStorage.removeItem("userData");
      }
    }, [userData]);
  

    return (
        <DataContext.Provider value={{ userData, setUserData }}>
            {children}
        </DataContext.Provider>
    )
}