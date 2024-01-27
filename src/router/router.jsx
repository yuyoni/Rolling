import { createBrowserRouter } from 'react-router-dom';
import CreatePaper from '../pages/CreatePaper/CreatePaper';
import Layout from '../components/Layout';
import Home from '../pages/Home/Home';
import List from '../pages/List/List';
import SendMessage from '../pages/Message/SendMessage';
import Post from '../pages/Post/Post';
import NotFound from '../pages/NotFound/NotFound';

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
      },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

export default router;
