import styled from "styled-components";
import ConditionRating from "../../components/common/conditionRating/ConditionRating";
import { getWeek, makeWeekList } from "../../../functions/utility/date";
import { useNavigate } from "react-router-dom";
import { getFilterCondition, updateCondition } from "../../../system/api/api";
import { useEffect } from "react";
import { useRates } from "../../../system/store/store";

const List = () => {
    const navigate = useNavigate();
    const dateList = makeWeekList();
    const { rates, loadRates } = useRates();

    const buttonHandler = (params) => {
        const {date, index} = params;
        navigate(`update/${date}/${index}`);
    }

    useEffect(() => {
        loadRates();
    }, [loadRates]);

    useEffect(() => {
        console.log(rates);
        // updateRate(4, 1);
    }, [rates]);

    return (
        <Wrapper>
            <Title>
                <h2>일주일 컨디션</h2>
            </Title>
            <Contents>
                {dateList.map((date, index) => (
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
