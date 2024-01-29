//context creation-
//amamzon ka warehouse
//consumer tk pahuncha bhi h uske liye provider, and jisko diya h vo consumer
//ab vo remove kr dia h
//and we use usecontext hook
//usecontext hook, consumer ko replace krta h
import React, { useContext } from "react";
const Appcontext=React.createContext();

//to create a provider function
const AppProvider=({children})=>{
    return (
        <Appcontext.Provider>
            {children}
        </Appcontext.Provider>
    )
}
const useGlobalContext=()=>{
    return useContext(Appcontext);
}
export {Appcontext,AppProvider,useGlobalContext};
