import styled from "styled-components";
import ConditionRating from "../../components/common/conditionRating/ConditionRating";
import { getWeek, makeWeekList } from "../../../functions/utility/date";
import { useNavigate } from "react-router-dom";
import { getFilterCondition, updateCondition } from "../../../system/api/api";
import { useEffect } from "react";
import { useRates } from "../../../system/store/store";
import BlackBtn from "../../components/common/button/BlackBtn";

const List = () => {
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

    useEffect(() => {
        console.log(rates, dates);
        // updateRate(4, 1);
    }, [rates, dates]);

    return (
        <Wrapper>
            <Title>
                <h2>일주일 컨디션</h2>
            </Title>
            <Contents>
                {dates.map((date, index) => (
                    <ConditionRating
                        key={index}
                        date={date}
                        week={getWeek(date)}
                        isEdit={false}
                        buttonHandler={buttonHandler}
                        prevRating={rates[index]}
                        index={index}
                    />
                ))}
            </Contents>
            <Pagination>
                <BlackBtn text={"이전주"} onClickHandler={getPrevRates} />
                <BlackBtn text={"다음주"} onClickHandler={getNextRates} />
            </Pagination>
        </Wrapper>
    );
};

export default List;

const Wrapper = styled.div`
    width: 600px;
    min-height: 800px;
    border: 2px solid black;
`;

const Title = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
`;

const Contents = styled.div`
    padding: 10px;
`;

const Pagination = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
`