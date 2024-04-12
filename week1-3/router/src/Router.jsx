import Home from './Home'
import Cat from './Cat'
import Dog from './Dog'
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/cat/:name',
        element: <Cat />
    },
    {
        path: '/dog',
        element: <Dog />
    }

]);

export default router;