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

    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) =>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value); //To update the local storage so tham even when the user logs in back the theme set prev stays
    }

    const setColor = (color) =>{
        setCurrentColor(color);
        localStorage.setItem('colorMode', color); 
        setThemeSettings(false);
    }

    
    return(
        // returns the underlying component {children}
        <StateContext.Provider value={{
             activeMenu,
             setActiveMenu,
             isClicked,
             setIsClicked,
             handleClick,
             screenSize, 
             setScreenSize,
             currentColor,
             currentMode,
             themeSettings,
             setThemeSettings,
             setColor,
             setMode
             }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);