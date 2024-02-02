import ReactDOM from 'react-dom/client';
import { v4 } from 'uuid';
import ToastMessage from './ToastMessage';

class Toast {
  // add properties
  DURATION_MS;

  TOAST_QUEUE;

  ROOT_ELEMENT;

  // add constructor
  constructor() {
    this.ROOT_ELEMENT = ReactDOM.createRoot(document.getElementById('toast'));
    this.DURATION_MS = 5000;
    this.TOAST_QUEUE = [];
  }

  // MessageType = 'success' | 'warning' | 'error' | 'info';
  addSuccess = message => {
    const id = v4();
    if (
      this.TOAST_QUEUE.filter(toast => toast.message === message).length > 0
    ) {
      return;
    }
    this.TOAST_QUEUE.push({
      id,
      message,
      messageType: 'success'
    });
    this.ROOT_ELEMENT.render(
      <ToastMessage
        messages={this.TOAST_QUEUE}
        closeMessage={this.removeToast}
      />
    );
    this.autoRemoveToast(id);
  };

  addWarning = message => {
    const id = v4();
    if (
      this.TOAST_QUEUE.filter(toast => toast.message === message).length > 0
    ) {
      return;
    }
    this.TOAST_QUEUE.push({
      id,
      message,
      messageType: 'warning'
    });
    this.ROOT_ELEMENT.render(
      <ToastMessage
        messages={this.TOAST_QUEUE}
        closeMessage={this.removeToast}
      />
    );
    this.autoRemoveToast(id);
  };

  addError = message => {
    const id = v4();
    if (
      this.TOAST_QUEUE.filter(toast => toast.message === message).length > 0
    ) {
      return;
    }
    this.TOAST_QUEUE.push({
      id,
      message,
      messageType: 'error'
    });
    this.ROOT_ELEMENT.render(
      <ToastMessage
        messages={this.TOAST_QUEUE}
        closeMessage={this.removeToast}
      />
    );
    this.autoRemoveToast(id);
  };

  addInfo = message => {
    const id = v4();
    if (
      this.TOAST_QUEUE.filter(toast => toast.message === message).length > 0
    ) {
      return;
    }
    this.TOAST_QUEUE.push({
      id,
      message,
      messageType: 'info'
    });
    this.ROOT_ELEMENT.render(
      <ToastMessage
        messages={this.TOAST_QUEUE}
        closeMessage={this.removeToast}
      />
    );
    this.autoRemoveToast(id);
  };

  removeToast = id => {
    const deleteIdx = this.TOAST_QUEUE.findIndex(toast => toast.id === id);
    this.TOAST_QUEUE.splice(deleteIdx, 1);
    this.ROOT_ELEMENT.render(
      <ToastMessage
        messages={this.TOAST_QUEUE}
        closeMessage={this.removeToast}
      />
    );
  };

  autoRemoveToast = id => {
    setTimeout(
      () => {
        this.removeToast(id);
      },
      this.DURATION_MS,
      this
    );
  };
}

export default new Toast();
