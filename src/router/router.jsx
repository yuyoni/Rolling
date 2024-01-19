import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import List from '../pages/List/List';
import Post from '../pages/Post';
import CreatePaper from '../components/createpaper/CreatePaper';

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
        path: 'createpaper',
        element: <CreatePaper />
      }
    ]
  }
]);

export default router;
