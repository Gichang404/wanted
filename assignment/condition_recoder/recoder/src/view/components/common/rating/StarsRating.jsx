import React, { useRef, useState } from "react";
import styled from "styled-components";

const StarRating = ({ isStatic, prevRating }) => {
    const filledRef = useRef(null);
    const [dynamicRating, setDynamicRating] = useState(0);
    const [staticRating, setStaticRating] = useState(prevRating ? prevRating : 0);

    const saveRating = () => {
        setStaticRating(dynamicRating);
    };

    const calculateWidth = (rating) => {
        return rating * 20;
    }

    const isHalf = (element, clientX) => {
        const bounds = element.getBoundingClientRect();
        const halfRange = (bounds.left + bounds.right) / 2;
        return clientX < halfRange ? true : false;
    }

    const changeDynamicRate = (e) => {
        const value = isHalf(e.target, e.clientX)
            ? e.target.dataset.value - 0.5
            : e.target.dataset.value;
        
        if (dynamicRating !== value) {
            filledRef.current.style.width = `${calculateWidth(value)}%`;
            setDynamicRating(value);
        } else {
            return;
        }
    };

    const changeStarToStaticStatus = () => {
        filledRef.current.style.width = `${calculateWidth(staticRating)}%`;
    };

    return (
        <Wrapper $isStatic={isStatic}
            onMouseLeave={isStatic ? undefined : changeStarToStaticStatus}
        >
            <Filled
                $prevRating={staticRating}
                ref={filledRef}
            >
                {[1, 2, 3, 4, 5].map((el, index) => (
                    <span
                        onClick={isStatic ? undefined : saveRating}
                        onMouseMove={isStatic ? undefined : changeDynamicRate}
                        key={index}
                        data-value={el}
                    >
                        ★
                    </span>
                ))}
            </Filled>
            <Empty>
                {[1, 2, 3, 4, 5].map((el, index) => (
                    <span
                        key={index}
                        data-value={el}
                        onMouseMove={isStatic ? undefined : changeDynamicRate}
                    >
                        ★
                    </span>
                ))}
            </Empty>
        </Wrapper>
    );
};

export default StarRating;

const Wrapper = styled.div`
    color: #aaa9a9;
    position: relative;
    unicode-bidi: bidi-override;
    width: max-content;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 1.3px;

    :hover {
        cursor: ${(props) => (props.$isStatic ? "default" : "pointer")};
    }
`;

const Filled = styled.div`
    width: ${(props) => (props.$prevRating ? `${props.$prevRating * 20}%` : "0%")};
    color: #fff58c;
    padding: 0;
    position: absolute;
    z-index: 1;
    display: flex;
    top: 0;
    left: 0;
    overflow: hidden;
    -webkit-text-fill-color: gold;
`;

const Empty = styled.div`
    z-index: 0;
    padding: 0;
    width: ${(props) => (props.$isStatic ? `${props.$prevRating * 20}%` : "100%")};
    overflow: ${(props) => (props.$isStatic ? "hidden" : "visible")};
`;
