import { useEffect, useState } from "react";
import { getIssue, renderMarkDown } from "../../../system/network/octokit";
import { useParams } from "react-router-dom";
import { Wrapper, Body } from "../../css/commons/commons";
import IssueCard from "../../components/common/issueCard/issueCard.jsx";
import styled from "styled-components";
import LayoutHeader from "../../layout/header/header.jsx";

const DetailPage = () => {
    const params = useParams();
    const [issue, setIssue] = useState({});
    useEffect(() => {
        const div = document.getElementsByClassName('content')[0];
        getIssue('angular', 'angular-cli', params.issue_number).then((res) => {
            setIssue(res.data);
            renderMarkDown(res.data.body).then((res) => {
                div.innerHTML = res.data
            });
        });

    }, [])
    console.log(issue)
    return (
        <Wrapper>
            <LayoutHeader />
            <Body>
                <OutLine>
                    <Profile>
                        <ImageOutter>
                            <Image src={issue.user?.avatar_url}/>
                        </ImageOutter>
                        <InfoOutter>
                            <IssueCard number={issue.number} 
                                title={issue.title} 
                                comments={issue.comments} 
                                user={issue.user}
                                created_at={issue.created_at}/>
                        </InfoOutter>
                    </Profile>
                    <Content className="content">
                    </Content>
                </OutLine>
            </Body>
        </Wrapper>
    );
}

export default DetailPage;

const OutLine = styled.div`
    border: 1px solid gray;
    max-height: 84vh;
    border-radius: 8px;
    padding: 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`

const Profile = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const Content = styled.section`
    width: 100%;
`;

const ImageOutter = styled.div `
    width: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
`;

const Image = styled.img `
    height: 48px;
`;

const InfoOutter = styled.div`
    width: 95%;
`;