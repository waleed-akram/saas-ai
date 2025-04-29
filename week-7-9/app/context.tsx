"use client"
import { useState,useContext,createContext } from "react"

const AllContext = createContext("");
export const useAllContext = useContext(AllContext);
export function ContextProvider({children}){
  const [context,setContext] = useState();
  
  return(
    <>
      <AllContext.Provider value={{context,setContext}}>
        {children}
      </AllContext.Provider>
    </>
  )
}
