import styled from "styled-components";
import {ReactComponent as Logo} from "../../../assects/git_logo.svg"

const LayoutHeader = () => {
    return (
        <Header>
            <ImageArea>
                <Logo width="32px" height="32px" fill="white"/>
            </ImageArea>
            <TitleArea>
                <Owner>Angular</Owner>
                <Divide>/</Divide>
                <Repo>Angular-cli</Repo>
            </TitleArea>
        </Header>
    );
}

export default LayoutHeader;

const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 50px;
    padding: 5px;
    background-color: #02040A;
`;

const ImageArea = styled.div`
    padding: 15px;
`

const TitleArea = styled.div`
    margin: auto 0px;
    margin-left: 15px;
    font-size: 1.2rem;
    color: white;
`;

const Owner = styled.span`
    color: white;
`;

const Divide = styled.span`
    color: white;
    margin: 0px 10px;
`;

const Repo = styled.span`
    color: white;
    font-weight: bold;
`;
