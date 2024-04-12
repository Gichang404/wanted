import { useState, useContext } from "react"
import { mainStore } from "../../../../system/store/store";
import { getAPI } from "../../../../system/network/octokit";
import styled from "styled-components";

const InfinityScroll = ({children}) => {
    const store = useContext(mainStore);
    const [count, setCount] = useState(1);

    const handleScroll = async () => {
        const element = document.getElementsByClassName("Infinity-Scroll")[0];
        const scrollHeight = element.scrollHeight;
        const scrollTop = element.scrollTop;
        const clientHeight = element.clientHeight;
        
        if (scrollTop + clientHeight >= (scrollHeight * 0.8)) {
            console.log('in inf if')
          // 페이지 끝에 도달하면 추가 데이터를 받아온다
          await getAPI('angular', 'angular-cli', 25 * count).then((res) => {
            console.log(res);
            store.setIssues([...store.issues, ...res.data]);
            });
            setCount(count + 1);
        }
    };

    return (
        <InfinityScrollWrapper className="Infinity-Scroll" onScroll={handleScroll}>
            {children}
        </InfinityScrollWrapper>
    )
}

export default InfinityScroll;

const InfinityScrollWrapper = styled.div`
  width: 100%;
  height: 800px;
  overflow-y: scroll;
  overflow-x: hidden;
`;