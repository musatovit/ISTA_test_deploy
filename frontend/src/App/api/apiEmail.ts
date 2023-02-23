import { Emailform } from '../../Components/CallBackFom/Types/types';

const addEmailList = async (newEmail: Emailform): Promise<Emailform> => {
  const res = await fetch('/api/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: newEmail.id,
      email: newEmail.email,
    }),
  });
  return res.json();
};
export default addEmailList;
