import { useSearchStateContext } from "@/hooks/search-state-context";

export const FiltersBar: React.FC = () => {
    const state =  useSearchStateContext();
    return (
        <div>{state.filter}</div>
    )
}