import { createBrowserRouter } from 'react-router-dom';
import CreatePaper from '../components/CreatePaper/CreatePaper';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import List from '../pages/List/List';
import SendMessage from '../pages/Message/SendMessage';
import Post from '../pages/Post/Post';

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
      },
      // 임의로 메세지 보내기 페이지 경로 설정
      {
        path: 'message',
        element: <SendMessage />
      }
    ]
  }
]);

export default router;
