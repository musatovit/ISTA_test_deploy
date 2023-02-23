import { NewMessage, PhoneForm } from '../../Components/Footer/Types/types';

export const sendMessageTelegram = async (
  newMessage: NewMessage
): Promise<NewMessage> => {
  const res = await fetch('/api/telegram', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: newMessage.msg,
    }),
  });
  return res.json();
};

export const addPhone = async (newPhone: PhoneForm): Promise<PhoneForm> => {
  const res = await fetch('/api/phone', {
    method: 'POST',

    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: newPhone.id,
      phone: newPhone.phone,
    }),
  });
  return res.json();
};
