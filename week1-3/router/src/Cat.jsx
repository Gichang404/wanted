import {useNavigate, useParams} from 'react-router-dom';

const Cat = () => {
    let num = 0;
    const navigate = useNavigate();
    const params = useParams();

    const addNumber = () => {
        num++;
        console.log(num);
    };

    return (
        <div>
            <div>고양이 페이지 입니다.</div>
            <div>user:{params.name}</div>
            <button onClick={() => {
                if (num < 5) {
                    addNumber();
                } else {
                    navigate('/dog');
                }
            }}>강아지 화면 가기</button>
        </div>
    );
};

export default Cat;