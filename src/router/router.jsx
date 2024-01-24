import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Layout from '../components/Layout';
import List from '../pages/List/List';
import Post from '../pages/Post/Post';
import CreatePaper from '../components/CreatePaper/CreatePaper';
import SendMessage from '../pages/Message/SendMessage';

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
        element: <CreatePaper />
      },
      {
        path: 'post/:id',
        element: <Post />
      },
      {
        path: 'post/:id/message',
        element: <SendMessage />
      }
    ]
  }
]);

export default router;
