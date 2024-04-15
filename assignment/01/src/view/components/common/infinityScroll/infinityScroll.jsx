import React, { useState, useContext, useEffect, useRef } from "react"
import { mainStore } from "../../../../system/store/store";
import { getAPI } from "../../../../system/network/octokit";
import styled from "styled-components";

const InfinityScroll = ({children, nodeNumber=5, className}) => {
    const store = useContext(mainStore);
    const [count, setCount] = useState(1);
    const observeRef = useRef(null);
    const divRef = useRef(null);
    console.log(children, 'it is InfinityScroll children', String(nodeNumber))

    const callApi = async  () => {
        await getAPI('angular', 'angular-cli', count + 1, store.state, store.sort).then((res) => {
            store.setIssues([...store.issues, ...res.data]);
        });
    }

    const handleIntersect = async (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                callApi();
                setCount(count + 1);
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }

    const createObserver = () => {
        const option = {
            root: divRef.current,
            threshold: 0.5,
        }
        console.log(observeRef.current)
        const observer = new IntersectionObserver(handleIntersect, option);
        
        observer.observe(observeRef.current);
    }

    useEffect(() => {
        if (children.length !== 0) {
            const elements = document.getElementsByClassName(className);
            const targetNumber = elements.length - nodeNumber; 
            console.log(targetNumber)
            observeRef.current = elements[targetNumber];
            createObserver();
        }
    }, [children.length]);

    return (
        <InfinityScrollWrapper ref={divRef}>
            {children}
        </InfinityScrollWrapper>
    )
}

export default InfinityScroll;

const InfinityScrollWrapper = styled.div`
  width: 100%;
  max-height: 80vh;
  /* padding-right: 5px; */
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 6px;
    background-color: gray;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: black;
  }
`;