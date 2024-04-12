import {createBrowserRouter} from "react-router-dom"
import ListPage from "../../view/pages/list/list";
import DetailPage from "../../view/pages/detail/detail";

const router = createBrowserRouter([
    {
        path: "/",
        element: <ListPage />
    },
    {
        path: "/detail/:issue_number",
        element: <DetailPage />
    }
]);

export default router;