import './List.css'

const List = (props) => {
    const setList = props.props.setList;
    const list = props.props.list;

    const removeList = (event) => {
        const id = Number(event.target.id);
        const newList = list.filter((_, idx) => {
            return idx !== id;
        });
        setList([...newList]);
    }

    return (
        <section className="list">
            {list.map((el, idx) => {
                return (
                    <div className='card' id={idx}>
                        <span>{el}</span>
                        <button onClick={removeList} id={idx}>완료</button>
                    </div>
                )
            })}
        </section>
    );
}

export default List;