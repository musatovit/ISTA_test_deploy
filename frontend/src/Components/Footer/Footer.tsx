import React, { useState } from 'react';
import { sendMessageTelegram } from '../../App/api/apiPhone';

import { useAppDispatch } from '../../store';
import { addPhones } from './FooterSlice';

function Footer(): JSX.Element {
  const [phone, setPhone] = useState('');
  const dispatch = useAppDispatch();

  const addedPhone = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (phone) {
      dispatch(addPhones({ phone }));
      sendMessageTelegram({ msg: phone });
      setPhone('');
    }
  };

  return (
    <footer className="flex justify-center px-2 text-gray-100 bg-black">
      <div className="container py-5">
        <h1
          className="text-center text-lg lg:text-xl"
          style={{ fontFamily: 'IBM Plex Sans' }}
        >
          Свяжитесь с нами <br />
        </h1>

        <div className="flex justify-center mt-6">
          <div className="bg-white rounded-lg">
            <div className="flex flex-wrap justify-between md:flex-row">
              <form onSubmit={addedPhone}>
                <input
                  type="tel"
                  className="m-1 p-2 appearance-none text-gray-700 text-sm focus:outline-none"
                  placeholder="89999999999"
                  pattern="[0-9]{11}"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <button
                  style={{ fontFamily: 'IBM Plex Sans' }}
                  type="submit"
                  className="w-full m-1 p-2 text-sm bg-blue-700 rounded-lg font-semibold uppercase transition hover:border-blue-800 hover:bg-blue-800 focus:outline-none focus:ring-blue-800 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-700 lg:w-auto"
                >
                  отправить
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="h-px mt-6 bg-gray-700 border-none" />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <img
              style={{ width: '15rem' }}
              src="/img/2023-02-16 16.27.36.jpg"
              alt="logo"
            />
            <a style={{ fontFamily: 'IBM Plex Sans' }} className="px-2 text-sm">
              ista_agency@mail.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
