import {createBrowserRouter} from 'react-router-dom'
import List from './List'
import Detail from './Detail'

const router = createBrowserRouter([
   {
    path : '/',
    element : <List />,
   },
   {
    path : '/:title',
    element : <Detail />,
   }
]);

export default router;