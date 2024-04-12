import styled from "styled-components";
import { Link } from "react-router-dom";

const Ad = () => {
    return (
        <Link to={"https://www.wanted.co.kr"}>
            <AdWrapper>
                <AdImage src="/images/IMG_2126.jpg"/>
            </AdWrapper>
        </Link>
    );
}

export default Ad;

const AdWrapper = styled.div`
    padding: 10px;
    width: 95%;
    &:hover {
        cursor: pointer;
    }
`;

const AdImage = styled.img`
    width: 100%;
    height: 130px;
    object-fit:cover;
`;