import { SearchState } from '@/models/SearchState';
import { createContext, useContext } from 'react';
import { useSearchState } from './search-state.hook';

export const SearchStateContext = createContext<SearchState>(null as any as SearchState);

interface SearchStateProviderProps {
    children: React.ReactNode;
}

export const SearchStateProvider: React.FC<SearchStateProviderProps> = ({children}) => {
    const contextValue = useSearchState();
    return (
        <SearchStateContext.Provider value={contextValue}> 
            {children}
        </SearchStateContext.Provider>
    )
}

export const useSearchStateContext = () => useContext(SearchStateContext);