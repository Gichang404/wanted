import styled from "styled-components";

export const ICardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid black;
    margin: 15px 0px;
    padding: 10px 0px;
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
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ICardCommnetsNum = styled.span `
`;