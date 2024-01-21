import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import List from '../pages/List/List';
import Post from '../pages/Post/Post';
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
        element: <Post />
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
