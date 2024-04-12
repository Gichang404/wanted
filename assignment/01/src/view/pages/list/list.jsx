import { useEffect, useContext } from "react";
import { getAPI } from "../../../system/network/octokit";
import LayoutHeader from "../../layout/header/header";
import { Wrapper } from "../../css/commons/commons";
import { mainStore } from "../../../system/store/store";
import IssueCard from "../../components/common/issueCard/issueCard.jsx";
import Ad from "../../components/common/ad/ad.jsx";
import InfinityScroll from "../../components/common/infinityScroll/infinityScroll.jsx";

const ListPage = () => {
    const store = useContext(mainStore);

    useEffect(() => {
        getAPI('angular', 'angular-cli', 25).then((res) => {
            store.setIssues([...store.issues, ...res.data]);
        });
    }, []);

    console.log(store.issues, 'issues');
    return (
        <Wrapper>
            <LayoutHeader />
            <InfinityScroll>
                {store.issues.map((data, index) => {
                    if (((index + 1) % 5) === 0) {
                        return <Ad key={index}/>
                    } else {
                        return <IssueCard key={index} 
                                          number={data.number} 
                                          title={data.title} 
                                          comments={data.comments} 
                                          user={data.user}
                                          created_at={data.created_at}/>
                    }
                })}
            </InfinityScroll>
        </Wrapper>
    );
}

export default ListPage;