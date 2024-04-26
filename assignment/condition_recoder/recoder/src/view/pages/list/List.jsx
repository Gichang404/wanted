import styled from "styled-components";
import ConditionRating from "../../components/common/conditionRating/ConditionRating";

const List = () => {
    return (
        <Wrapper>
            <Title>
                <h2>일주일 컨디션</h2>
            </Title>
            <Contents>
                <ConditionRating week={"월"} isStatic={true} prevRating={undefined}/>
            </Contents>
        </Wrapper>
    );
}

export default List;

const Wrapper = styled.div`
    width: 600px;
    min-height: 800px;
    border: 2px solid black;
`

const Title = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
`

const Contents = styled.div`
    padding: 10px
`