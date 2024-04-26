import styled from "styled-components";
import StarRating from "../rating/StarsRating";
import BlackBtn from "../button/BlackBtn";

const ConditionRating = ({
    prevRating,
    isEdit,
    week,
    buttonHandler,
    date,
    saveTempRating,
    index,
}) => {
    return (
        <Wrapper>
            <div>
                <p>{week}</p>
            </div>
            {!isEdit ? (
                <Rating>
                    {prevRating ? (
                        <StarRating isStatic={true} prevRating={prevRating} />
                    ) : (
                        <p> - </p>
                    )}
                </Rating>
            ) : (
                <div>
                    <StarRating isStatic={false} prevRating={prevRating} saveTempRating={saveTempRating} />
                </div>
            )}
            {!isEdit && (
                <div>
                    <BlackBtn
                        onClickHandler={buttonHandler}
                        text={"수정"}
                        params={{ date, index}}
                    />
                </div>
            )}
        </Wrapper>
    );
};

export default ConditionRating;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;

    div {
        display: flex;
        align-items: center;
        font-size: 2rem;
    }

    div > p {
        font-weight: bolder;
        font-size: 1.5rem;
    }
`;

const Rating = styled.div`
    width: 170px;
`
