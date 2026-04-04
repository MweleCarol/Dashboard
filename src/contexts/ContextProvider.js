import { createContext, useState, useContext }  from "react";

const StateContext = createContext();
const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}
export const ContextProvider = ({children}) =>{
    const [ activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick = (clicked) => {
       setIsClicked({...initialState, [clicked] : true});
    }
    const [screenSize, setScreenSize] = useState(undefined);
    return(
        // returns the underlying component {children}
        <StateContext.Provider value={{
            activeMenu,
             setActiveMenu,
             isClicked,
             setIsClicked,
             handleClick,
             screenSize, 
             setScreenSize
             }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);