import {useAdd} from "./useAdd"
import { useEffect } from "react";

const List = () => {
    const [list, _] = useAdd();
    useEffect(() => {
        console.log(list);
    }, [list]);

    return (
        <div>
            {
                list.map((content, idx) => {
                    return(
                        <div key={idx}>
                            <span>{content}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default List;