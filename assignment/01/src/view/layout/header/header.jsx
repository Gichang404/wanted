import styled from "styled-components";

const LayoutHeader = () => {
    return (
        <Header>
            <h1>Angular / Angular-cli</h1>
        </Header>
    );
}

export default LayoutHeader;

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;