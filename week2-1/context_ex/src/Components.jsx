import React from 'react';
import {Link, useNavigate, useParams} from 'react-router-dom';

import { CatNameStore } from './App';

// Text 입력 받는 컴포넌트

// 버튼 컴포넌트 

// 입력한 텍스트가 나오는 컴포넌트 

const TextInput = (props) => {

  return (
    <input type="text" ref={props.inputRef}/>
  )
}

const Button = (props) => {

  return (
    <button onClick={() => {

      props.changeCatName(props.inputRef.current.value);
    }}>입력</button>
  )
}

const TextOutput = (props) => {

  const h1tag = React.useRef(null);
  // console.log(props);
  React.useEffect(() => {

    // let tag = document.getElementById("h1");
    // tag.addEventListener("mouseover", () => {
    //   tag.style.backgroundColor = "blue";
    // });

    // // clean up
    // return () => {
    //   tag.removeEventListener("mouseover", () => {
    //     tag.style.backgroundColor = "blue";
    //   });
    // }
  }, []);

  return (
    <h1 id="h1" ref={h1tag}>{props.catName}</h1>
  )
}

const Cat = () => {
  // const [name, setName] = React.useState("고양이");

  const {text, setText} = React.useContext(CatNameStore);
  const navigate = useNavigate();
  return (
    <div>
      <h1>고양이</h1>
      <p>{text}</p>
      <button onClick={() => {
        // setName("냥이");
        setText("냥이");
      }}>변경하기</button>
      <button onClick={() => {
        console.log(navigate);
        navigate('/dog/aaa');
      }}>강아지 가기</button>
    </div>
  )
}


const Dog = () => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  return  (
    <div>
      <h1>강아지</h1>
      <button onClick={() => {
        navigate(-1);
      }}>뒤로가기</button>
    </div>

  )
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/* <a href={'/cat'}>cat가기</a> */}
      <Link to={'/cat'}>cat가기</Link>
    </div>

  )
}


export { TextInput, Button, TextOutput, Cat, Dog, Home};