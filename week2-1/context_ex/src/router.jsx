import {Home, Dog, Cat} from "./Components";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cat",
    element: <Cat />,
  },
  {
    path: "/dog/:dogName",
    element: <Dog />,
  },
]);

export default router;