import { SearchState } from "@/models/SearchState";
import { useEffect, useState } from "react";

export function useSearchState() : SearchState {
    const [searchState, setSearchState] = useState<SearchState>({} as SearchState);

    useEffect(() => {
        if (searchState.filter===undefined) {
            const initialSearchState : SearchState = {
                filter:"Filters value",
                results: "Search Results"
            }
            setSearchState(initialSearchState)
        }

    }, [searchState])

    return searchState;

}