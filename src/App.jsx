import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
