import { createContext } from "react";
import { useState } from "react";

export const mainStore = createContext();

const MainStoreProvider = ({children}) => {
    const [issues, setIssues] = useState([]);

    const value = {
        issues,
        setIssues,
    }


    return (
        <mainStore.Provider value={value}>
            {children}
        </mainStore.Provider>
    );
}

export default MainStoreProvider;