import ReactDOM from 'react-dom';

const ToastPortal = ({ children }) => {
  const element = document.getElementById('toast');
  return ReactDOM.createPortal(children, element);
};

export default ToastPortal;
