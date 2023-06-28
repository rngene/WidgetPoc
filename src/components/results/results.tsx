import { useSearchStateContext } from "@/hooks/search-state-context";

export const Results: React.FC = () => {
    const state =  useSearchStateContext();
    return (
        <div>{state.results}</div>
    )
}