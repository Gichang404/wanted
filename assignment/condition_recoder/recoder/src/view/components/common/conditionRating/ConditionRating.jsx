import styled from "styled-components";
import StarRating from "../rating/StarsRating";

const ConditionRating = ({ prevRating, isStatic, week, buttonHandler, date }) => {
    return (
        <Wrapper>
            <div>
                <p>{week}</p>
            </div>
            {
                prevRating ? (
                    <div>
                        <StarRating isStatic={isStatic} prevRating={prevRating}/>
                    </div>
                ) : (
                    <div>
                        <p> - </p>
                    </div>
                )
            }
            {
                isStatic && 
                    <div>
                        <button onClick={()=>{
                            buttonHandler(date);
                        }}>수정</button>
                    </div>
            }
        </Wrapper>
    )
}

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

    div > button {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;
        width: 60px;
        height: 30px;
        background-color: black;
        color: white;
        font-size: 16px;
        font-weight: 800;

        &:hover {
            cursor: pointer;
            background-color: gray;
        }
    }
`;