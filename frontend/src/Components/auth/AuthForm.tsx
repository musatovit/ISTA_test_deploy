import React, { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { loginUser } from './authRegSlice';

function Authorization(): JSX.Element {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const { user, message } = useSelector((store: RootState) => store.users);
  useLayoutEffect(() => {
    if ('userName' in user) {
      nav('/adminPage');
      window.location.reload();
    }
  }, [nav, user]);
  const login = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(loginUser({ userName, password }));
  };
  return (
    <center>
      <div style={{ margin: '10rem 0 10rem 0' }} className="w-full max-w-lg ">
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4" onSubmit={login}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userName"
            >
              Имя пользователя
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="type"
              name="userName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ color: 'black' }}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Пароль
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="img"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
              style={{ color: 'black' }}
            />
          </div>
          <div className="flex flex-col items-center">
            <button
              className="shadow-2xl py-2 px-7 bg-blue-700 text-white rounded"
              type="submit"
            >
              Войти
            </button>

            <h2>{message}</h2>
          </div>
        </form>
      </div>
    </center>
  );
}

export default Authorization;
