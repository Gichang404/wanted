import { createBrowserRouter } from "react-router-dom";
import Update from "../../view/pages/update/Update";
import List from "../../view/pages/list/List";

const router = createBrowserRouter([
    {
        path: "/",
        element: <List />,
    },
    {
        path: "/update/:date/:index",
        element: <Update />,
    }
]);

export default router;