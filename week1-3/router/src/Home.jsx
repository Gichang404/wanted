import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>메인 페이지 입니다.
            <Link to='/'>Home</Link>
            <Link to='/cat'>Cat</Link>
            <Link to='/dog'>Dog</Link>
        </div>
    );
};

export default Home;