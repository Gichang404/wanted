import { useNavigate, useParams } from "react-router-dom";
import { updateRate, useRates } from "../../system/store/store";
import { useEffect, useState } from "react";
import { postCondition, updateCondition } from "../../system/api/api";

export const useUpdate = () => {
    const navigate = useNavigate();
    const { date, index } = useParams();
    const { rates } = useRates();
    const [tempRating, setTempRating] = useState(rates[index]);
    const [isFloat, setIsFloat] = useState(false);

    const saveTempRating = (rating) => {
        setTempRating(rating);
    };

    useEffect(() => {
        const keyDownHandler = (e) => {
            const key = Number(e.key);
            if (typeof key === "number" && key < 6 && !isFloat) {
                setTempRating(key);
            } else if (typeof key === "number" && key === 5 && isFloat) {
                const number = `${tempRating}.${key}`;
                setTempRating(number);
                setIsFloat((prev) => !prev);
            } else if (e.key === ".") {
                setIsFloat((prev) => !prev);
            } else if (typeof key === "number" && key < 6 && isFloat) {
                setIsFloat((prev) => !prev);
            }
        };


        window.addEventListener("keydown", keyDownHandler);

        return () => {
            window.removeEventListener("keydown", keyDownHandler);
        };
    }, [isFloat, tempRating]);

    const saveConditionData = async () => {
        if (rates[index] === 0) {
            try {
                await postCondition(date, tempRating);
                alert("평점을 저장 하였습니다.");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                await updateCondition(date, tempRating);
                updateRate(index, tempRating);
                alert("평점을 수정 하였습니다.");
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
    };

    return { date, tempRating, saveTempRating, saveConditionData };
}
