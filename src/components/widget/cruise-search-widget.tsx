"use client"
import { SearchStateProvider } from "@/hooks/search-state-context"
import { FiltersBar } from "./filters-bar"

export const CruiseSearchWidget: React.FC = () => {
    return (
        <SearchStateProvider>
            <FiltersBar/>
        </SearchStateProvider>
    )
}

export default CruiseSearchWidget;