import { useEffect, useState } from "react";
import { getIssue, renderMarkDown } from "../../../system/network/octokit";
import { useParams } from "react-router-dom";
import { Wrapper } from "../../css/commons/commons";
import IssueCard from "../../components/common/issueCard/issueCard.jsx";
import styled from "styled-components";

const DetailPage = () => {
    const params = useParams();
    const [issue, setIssue] = useState({});
    useEffect(() => {
        const div = document.getElementsByClassName('content')[0];
        getIssue('angular', 'angular-cli', params.issue_number).then((res) => {
            setIssue(res.data);
            renderMarkDown(res.data.body).then((res) => {
                console.log(div)
                div.innerHTML = res.data
            });
        });

    }, [])
    console.log(issue)
    return (
        <Wrapper>
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
        </Wrapper>
    );
}

export default DetailPage;

const Profile = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const Content = styled.section`
    width: 100%;
`;

const ImageOutter = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
`;

const Image = styled.img `
    height: 80px;
`;

const InfoOutter = styled.div`
`;