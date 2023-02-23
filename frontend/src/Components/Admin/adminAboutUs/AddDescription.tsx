import React, { useState } from 'react';

import { useAppDispatch } from '../../../store';
import { addDescriptions } from '../../AboutUs/descriptionSlicer';

export default function AddDescription(): JSX.Element {
  const [img, setImg] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useAppDispatch();
  const addedDescription = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(addDescriptions({ img, body }));
    setBody('');
    setImg('');
  };
  return (
    <div
      style={{ border: '1px solid', marginTop: '1rem', marginBottom: '1rem' }}
      className="block w-2/4 rounded-lg bg-white p-25"
    >
      <h3 style={{ color: 'black', fontWeight: 'bold', fontSize: '20px' }}>
        Форма добавления о нас
      </h3>
      <form onSubmit={addedDescription}>
        <div className="relative mb-5 " data-te-input-wrapper-init>
          <input
            className="placeholder w-96"
            style={{ color: 'black', backgroundColor: 'white' }}
            type="text"
            id="img"
            name="img"
            value={img}
            onChange={(e) => setImg(String(e.target.value))}
            placeholder="Ссылка на картинку"
          />
        </div>
        <div className="relative mb-6 " data-te-input-wrapper-init>
          <input
            className="placeholder w-96"
            style={{ color: 'black', backgroundColor: 'white' }}
            type="text"
            id="body"
            name="body"
            value={body}
            onChange={(e) => setBody(String(e.target.value))}
            placeholder="Описание"
          />
        </div>
        <button
          style={{ marginBottom: '1rem' }}
          type="submit"
          className=" py-2 px-7 bg-blue-700 text-white rounded hover:bg-blue-800"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Добавить
        </button>
      </form>
    </div>
  );
}
