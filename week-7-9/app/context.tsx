"use client";
import { useContext, createContext } from "react";

const AllContext = createContext({
  
});
export const useAllContext = useContext(AllContext);
export function ContextProvider({ children }) {
  return (
    <>
      <AllContext.Provider value={"No Context"}>{children}</AllContext.Provider>
    </>
  );
}
