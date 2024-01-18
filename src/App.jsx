import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';

import RouteButton from './components/RouteButton';
import Home from './pages/Home';
import Post from './pages/Post';
import List from './pages/List';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <h1>App</h1>
        <RouteButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
