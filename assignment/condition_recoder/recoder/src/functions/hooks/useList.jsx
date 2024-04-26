import { useNavigate } from "react-router-dom";
import { useRates } from "../../system/store/store";
import { useEffect } from "react";

export const useList = () => {
    const navigate = useNavigate();
    const { rates, dates, loadRates, prevRates, nextRates } = useRates();

    const buttonHandler = (params) => {
        const { date, index } = params;
        navigate(`update/${date}/${index}`);
    };

    const getPrevRates = () => {
        prevRates();
        loadRates();
    };

    const getNextRates = () => {
        nextRates();
        loadRates();
    };

    useEffect(() => {
        loadRates();
    }, [loadRates]);

    return { rates, dates, buttonHandler, getNextRates, getPrevRates }
}