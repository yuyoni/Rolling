import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Layout from '../components/Layout';
import List from '../pages/List/List';
<<<<<<< HEAD
import Post from '../pages/Post';
=======
import Post from '../pages/Post/Post';
>>>>>>> 50f6b8489ef532c00dd4ba02da4a3b0ea6b66235
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
