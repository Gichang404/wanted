import { createBrowserRouter } from "react-router-dom";
import Detail from "../../view/pages/detail/detail";
import List from "../../view/pages/list/List";

const router = createBrowserRouter([
    {
        path: "/",
        element: <List />,
    },
    {
        path: "/detail/:week",
        element: <Detail />,
    }
]);

export default router;