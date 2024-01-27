import { useEffect, useState } from 'react';

export default function useToast() {
  const [toastList, setToastList] = useState([]);
  const [isLock, setIsLock] = useState(false);

  const lockAddToast = () => {
    setIsLock(true);
    setTimeout(() => {
      setIsLock(false);
    }, 4000);
  };

  useEffect(() => {
    lockAddToast();
  }, [toastList]);

  const addToast = (type, message) => {
    if (isLock) return;
    const toast = {
      id: Math.random(),
      messageType: type,
      message
    };
    setToastList(prev => [...prev, toast]);
    lockAddToast();
  };

  const removeToast = id => {
    setToastList(() => toastList.filter(toast => toast.id === id));
  };

  return { toastList, addToast, removeToast };
}
