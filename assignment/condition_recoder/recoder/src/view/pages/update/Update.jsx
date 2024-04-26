import { useParams } from "react-router-dom";
import ConditionRating from "../../components/common/conditionRating/ConditionRating";
import { getWeek } from "../../../functions/utility/date";
import styled from "styled-components";
import BlackBtn from "../../components/common/button/BlackBtn";
import { useState } from "react";
import { postCondition } from "../../../system/api/api";

const Update = () => {
    const { date } = useParams();
    const [tempRating, setTempRating] = useState(0);
    
    const saveTempRating = (rating) => {
        setTempRating(rating);
    }

    const saveConditionData = async () => {
        // tempRating을 이용하여 api post요청
        const res = await postCondition(date, tempRating);
    }

    return (
        <Wrapper>
            <Title>
                <h2>{getWeek(date)}요일 평점 매기기</h2>
                <p>{date}</p>
            </Title>
            <Contents>
                <Rating>
                    <ConditionRating
                        date={date}
                        week={getWeek(date)}
                        prevRating={undefined}
                        saveTempRating={saveTempRating}
                        isEdit={true}
                    />
                </Rating>
                <Save>
                    <BlackBtn onClickHandler={saveConditionData} params={undefined} text={"저장하기"}/>
                </Save>
            </Contents>
        </Wrapper>
    );
};

export default Update;

const Wrapper = styled.div`
    width: 600px;
    min-height: 800px;
    border: 2px solid black;
`;

const Title = styled.div`
    padding: 10px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Contents = styled.div`
    padding: 10px;
    height: 72vh;
`;

const Rating = styled.div`
    padding: 180px
`;

const Save = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        
    }
`;