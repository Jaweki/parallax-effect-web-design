import { createContext, useMemo, useState } from "react";

export const AppContext = createContext({
    isMenuOpen: false,
    toggleMenu: () => {}
});

const  AppContextProvider = ({ children }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const contextValues = useMemo(() => {

        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        }

        return {
            isMenuOpen,
            toggleMenu
        };

    }, [isMenuOpen]);

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
