import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDog } from "./redux/slices/dog";
import { addCat } from "./redux/slices/cat";

//고양이
//강아지
//홈

const Cat = () => {
    const cat = useSelector((state) => state.cat.cat_arr);
    console.log(cat);

    return(
        <div>
            <h1>고양이</h1>
            {cat.map((el, idx) => {
                return (
                    <div key={idx}><h2>{el}</h2></div>
                );
            })}
        </div>
    );
}

const Dog = () => {
    const dog = useSelector((state) => state.dog.dog_arr);
    console.log(dog)
    return (
        <div>
            <h1>강아지</h1>
            {dog.map((el, idx) => {
                return (
                    <div key={idx}><h2>{el}</h2></div>
                );
            })}
        </div>
    );
}

const Home = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <h1>홈</h1>
            <button onClick={() => {
                dispatch(addCat('추가냥'));
            }}>고양이 추가</button>
            <button onClick={() => {
                dispatch(addDog('추가덕'));
            }}>강아지 추가</button>
        </div>
    );
}

export {
    Cat, Dog, Home
}