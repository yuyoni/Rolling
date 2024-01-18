import { Link } from 'react-router-dom';

function RouteButton() {
  return (
    <>
      <Link to={{ pathname: '/' }}>Home</Link>
      <br />
      <Link to={{ pathname: '/post' }}>Post</Link>
      <br />
      <Link to={{ pathname: '/list' }}>List</Link>
    </>
  );
}

export default RouteButton;
