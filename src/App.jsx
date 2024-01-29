import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import router from './router/router';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <GlobalStyles />
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  );
}

export default App;
