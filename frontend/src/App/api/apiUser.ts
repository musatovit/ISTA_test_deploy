import { State, User } from '../../Components/auth/Types/types';

export const loginUser = async (users: User): Promise<State> => {
  const res = await fetch('/api/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      userName: users.userName,
      password: users.password,
    }),
  });
  return res.json();
};

export const regUser = async (newUser: User): Promise<State> => {
  const res = await fetch('/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      userName: newUser.userName,
      password: newUser.password,
    }),
  });
  return res.json();
};
export const getCheckUser = async (): Promise<State> => {
  const res = await fetch('/api/auth/check', {
    credentials: 'include',
  });

  const data = await res.json();
  return data;
};
export const Logout = async (): Promise<State> => {
  const res = await fetch('/api/auth/logout', {
    credentials: 'include',
  });

  const data = await res.json();
  return data;
};
