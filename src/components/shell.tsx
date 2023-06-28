"use client"
import { SearchStateProvider } from "@/hooks/search-state-context"
import { FiltersBar } from "./widget/filters-bar"
import { Results } from "./results/results"

export const Shell: React.FC = () => {
    return (
        <SearchStateProvider>
            <FiltersBar/>
            <Results/>
        </SearchStateProvider>
    )
}