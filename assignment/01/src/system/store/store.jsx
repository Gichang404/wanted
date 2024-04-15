import { createContext } from "react";
import { useState } from "react";

export const mainStore = createContext();

const MainStoreProvider = ({children}) => {
    const [issues, setIssues] = useState([]);
    const [state, setState] = useState('open');
    const [sort, setSort] = useState('created');
    const [isLoading, setIsLoading] = useState(false);

    const value = {
        issues,
        setIssues,
        state,
        setState,
        sort,
        setSort,
        isLoading,
        setIsLoading,
    }


    return (
        <mainStore.Provider value={value}>
            {children}
        </mainStore.Provider>
    );
}

export default MainStoreProvider;