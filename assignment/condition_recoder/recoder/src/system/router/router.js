import { createBrowserRouter } from "react-router-dom";
import Detail from "../../view/pages/detail/Detail";
import List from "../../view/pages/list/List";

const router = createBrowserRouter([
    {
        path: "/",
        element: <List />,
    },
    {
        path: "/detail/:date",
        element: <Detail />,
    }
]);

export default router;