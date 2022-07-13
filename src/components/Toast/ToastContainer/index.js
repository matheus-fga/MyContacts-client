import { useState } from 'react';

import ToastMessage from '../ToastMessage';

import { Container } from './styles';

export default function ToastContainer() {
  const [messages] = useState([
    { id: Math.random(), type: 'default', text: 'Default toast' },
    { id: Math.random(), type: 'danger', text: 'Danger toast' },
    { id: Math.random(), type: 'success', text: 'Success toast' },
  ]);

  return (
    <Container>
      {messages.map((toastMessage) => (
        <ToastMessage
          key={toastMessage.id}
          text={toastMessage.text}
          type={toastMessage.type}
        />
      ))}
    </Container>
  );
}
