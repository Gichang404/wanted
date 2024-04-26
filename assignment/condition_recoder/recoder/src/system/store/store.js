import { create } from "zustand"
import { makeWeekList } from "../../functions/utility/date";
import { initializedRates } from "../api/api";

export const useRates = create((set) => ({
    rates: [],
    dates: makeWeekList(),
    loadRates: async () => {
        const dates = useRates.getState().dates;
        const rates = await initializedRates(dates);
        set({ rates });
    },
    prevRates: () => {
        const today = useRates.getState().dates;
        const dates = makeWeekList(today[0], "PREV");
        set({ dates })
    },
    nextRates: () => {
        const today = useRates.getState().dates;
        const dates = makeWeekList(today[today.length - 1], "NEXT");
        set({ dates })
    },
}));

export const resetRates = () => {
    useRates.setState({ rates: [], dates: [] });
}

export const updateRate = (index, rate) => {
    const state = useRates.getState();
    const rates = state.rates;
    rates.splice(index, 1, rate);
    useRates.setState({ rates });
}