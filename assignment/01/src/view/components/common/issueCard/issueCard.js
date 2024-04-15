import styled from "styled-components";

export const ICardWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid black;
    margin: 15px 0px;
    padding: 10px;
    &:hover {
      cursor: pointer;  
    }
`;

export const ICardIssue = styled.section `
    width: 80%;
`;

export const ICardInfoTitle = styled.span `
    display: block;
    padding: 5px 0px;
`;

export const ICardInfo = styled.span `
    display: block;
    padding: 5px 0px;
`

export const ICardCommnets = styled.section `
    padding-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ICardCommnetsNum = styled.span `
    display: flex;
    align-items: center;

    & > p {
        margin-left: 10px;
    }
`;