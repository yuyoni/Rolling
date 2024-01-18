import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../pages/Layout';
import List from '../pages/List';
import Post from '../pages/Post';
import SendMessage from '../pages/SendMessage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'list',
        element: <List />
      },
      {
        path: 'post',
        element: <Post />
      },
      {
        path: 'message',
        element: <SendMessage />
      }
    ]
  }
]);

export default router;
