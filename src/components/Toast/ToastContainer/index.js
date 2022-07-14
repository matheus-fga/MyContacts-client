import { useState, useEffect, useCallback } from 'react';

import ToastMessage from '../ToastMessage';
import { toastEventManager } from '../../../utils/toast';

import { Container } from './styles';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ text, type, duration }) {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Math.random(), text, type, duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.remove('addtoast', handleAddToast);
    };
  }, []);

  const handleRemoveMessage = useCallback((id) => {
    setMessages((prevState) => prevState.filter(
      (message) => message.id !== id,
    ));
  }, []);

  return (
    <Container>
      {messages.map((toastMessage) => (
        <ToastMessage
          key={toastMessage.id}
          message={toastMessage}
          onRemoveMessage={handleRemoveMessage}
        />
      ))}
    </Container>
  );
}
