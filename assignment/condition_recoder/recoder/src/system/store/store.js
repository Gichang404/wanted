import { create } from "zustand"
import { makeWeekList } from "../../functions/utility/date";
import { initializedRates } from "../api/api";

export const useRates = create((set) => ({
    rates: [],
    dates: makeWeekList(),
    loadRates: async () => {
        const rates = await initializedRates();
        set({ rates });
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