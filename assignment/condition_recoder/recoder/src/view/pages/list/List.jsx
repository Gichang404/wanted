import StarRating from "../../components/common/rating/StarsRating";


const List = () => {
    return (
        <div style={{'fontSize' : '2em'}}>
            <StarRating prevRating={null} isStatic={false}></StarRating>
        </div>
    );
}

export default List;