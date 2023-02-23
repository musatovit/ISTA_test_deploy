import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { registrUser } from './authRegSlice';

function Registration(): JSX.Element {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const { messages } = useSelector((store: RootState) => store.users);
  const nav = useNavigate();
  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(registrUser({ userName, password }));
  };

  const ref = (): void => {
    if (
      messages !== 'Заполните все поля' &&
      messages !== 'Пользователь уже существует' &&
      messages !== 'Failed to fetch' &&
      messages !== undefined &&
      messages === 'Вы успешно зарегистрировались, нажмите еще раз чтобы перейти'
    ) {
      nav('/adminPage');
      window.location.reload();
    }
  };

  return (
    <center>
      <div style={{ margin: '10rem 0 13rem 0' }} className="w-full max-w-lg ">
        <form className="bg-white rounded px-8" onSubmit={registr}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userName"
            >
              Имя пользователя
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
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
              id="password"
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
              onClick={ref}
            >
              Зарегистрироваться
            </button>

            <h2>{messages}</h2>
          </div>
        </form>
      </div>
    </center>
  );
}

export default Registration;
