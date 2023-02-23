import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import { addEmailss } from './CallbackSlice';

function CallBackForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();

  const addedEmail = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addEmailss({ email }));
    setEmail('');
  };
  return (
    <div className=" container mx-auto px-4 py-14 sm:px-6 xl:px-12">
      <h1 id="dermo" className="md:text-2xl ml-20 lg:text-3xl ml-30">
        Получите бесплатную консультация маркетолога
      </h1>
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <form
          className="flex w-4/6 max-w-full flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3"
          onSubmit={addedEmail}
        >
          <input
            name="email"
            type="email"
            className="w-full rounded-md border bg-gray-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="y@yandex.ru"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full rounded-md border border-blue-700 bg-blue-700 py-2 px-6 text-white transition hover:border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-800 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-blue-700 disabled:hover:bg-blue-700 sm:max-w-max"
          >
            Отправить
          </button>
        </form>
      </div>
      <img style={{ height: '800px' }} src="/img/3.jpg" alt="gif" />
    </div>
  );
}

export default CallBackForm;
