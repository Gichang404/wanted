import { useEffect, useContext, useState } from "react";
import { getAPI } from "../../../system/network/octokit";
import LayoutHeader from "../../layout/header/header";
import { Wrapper, Body } from "../../css/commons/commons";
import { mainStore } from "../../../system/store/store";
import IssueCard from "../../components/common/issueCard/issueCard.jsx";
import Ad from "../../components/common/ad/ad.jsx";
import InfinityScroll from "../../components/common/infinityScroll/infinityScroll.jsx";
import Select from "../../components/common/select/select.jsx";
import styled from "styled-components";
import {ReactComponent as Opened} from '../../../assects/issue_opened.svg'
import {ReactComponent as Closed} from '../../../assects/issue_closed.svg'
import {ReactComponent as Total} from '../../../assects/issue_total.svg'

const ListPage = () => {
    const store = useContext(mainStore);
    const [checkedState, setCheckedState] = useState('open');

    const loadingHandler = (action) => {
        store.setIsLoading(action);
    }

    useEffect(() => {
        loadingHandler(true);
        getAPI('angular', 'angular-cli', 1).then((res) => {
            store.setIssues([...store.issues, ...res.data]);
            loadingHandler(false);
        });
        console.log(store.state, store.sort)
    }, []);

    useEffect(() => {
        const cursorHandler = () => {
            const element = document.getElementById("wrapper");
            if (store.isLoading === undefined) {
                return;
            } else if (store.isLoading) {
                element.style.cursor = "url(/images/Spinnergif.gif), auto"
            } else {
                element.style.cursor = "default"
            }
        }
        cursorHandler();
    }, [store.isLoading])

    const checkedStyleHandler = (action) => {
        const element = document.getElementById(checkedState);
        if (action === "remove") {
            element.style.borderBottom = "none";
            element.style.paddingBottom = "none";
        } else {
            element.style.borderBottom = "2px solid gray";
            element.style.paddingBottom = "2px";
        }
    }

    useEffect(() => {
        store.setIssues([])
        loadingHandler(true);
        getAPI('angular', 'angular-cli', 1, store.state, store.sort).then((res) => {
            store.setIssues([...res.data]);
            loadingHandler(false);
        });

        checkedStyleHandler("add");
    }, [store.state, store.sort]);

    const stateHandler = (e) => {
        const stateCode = e.currentTarget.dataset.code;
        checkedStyleHandler("remove");
        store.setState(stateCode);
        setCheckedState(stateCode);
    }

    console.log(store.issues, 'issues');        

    return (
        <Wrapper id="wrapper">
            <LayoutHeader />
            <Body>
                <Filter>
                    {/* <Select options={["Open", "Closed", "All"]} 
                            target='state'
                    /> */}
                    <StateArea>
                        <State onClick={stateHandler} data-code="open">
                            <Opened width="16px" height="16px" />
                            <StateCode id="open">Opened</StateCode>
                        </State>
                        <State onClick={stateHandler} data-code="closed">
                            <Closed width="16px" height="16px" />
                            <StateCode id="closed">Closed</StateCode>
                        </State>
                        <State onClick={stateHandler} data-code="all">
                            <Total width="16px" height="16px" />
                            <StateCode id="all">Total</StateCode>
                        </State>
                    </StateArea>
                    <Select options={["Created", "Updated", "Comments"]} 
                            target='sort'
                    />
                </Filter>
                <Contents>
                    <InfinityScroll className={"issue_list_card"}>
                        {store.issues.map((data, index) => {
                            if (((index + 1) % 5) === 0) {
                                return <Ad key={index}/>
                            } else {
                                return <IssueCard key={index}
                                                className={"issue_list_card"}
                                                nodeNumber={index}
                                                number={data.number} 
                                                title={data.title} 
                                                comments={data.comments} 
                                                user={data.user}
                                                created_at={data.created_at}/>
                            }
                        })}
                    </InfinityScroll>
                </Contents>
            </Body>
        </Wrapper>
    );
}

export default ListPage;

const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 24px;
    border: 1px solid gray;
    border-radius: 15px;
`;

const StateArea = styled.div`
    display: flex;
`;

const State = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;
    &:hover {
        cursor: pointer;
    }
`

const StateCode = styled.div`
    margin-left: 5px;
`

const Contents = styled.div`
    max-width: 1280px;
    max-height: 80vh;
    border: 1px solid gray;
    border-radius: 8px;
`;